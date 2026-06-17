interface ContributionDay {
  contributionCount: number;
  date: string;
}

interface ContributionWeek {
  contributionDays: ContributionDay[];
}

interface ContributionMonth {
  name: string;
}

interface MonthLabel {
  label: string;
  columnStart: number;
}

export default async function GithubGraph() {
  const query = `
    query {
      user(login: "Chiranjeev-sahu") {
        contributionsCollection {
          contributionCalendar {
            totalContributions
            months {
              name
            }
            weeks {
              contributionDays {
                contributionCount
                date
              }
            }
          }
        }
      }
    }
  `;

  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await response.json();
  const calendar =
    data?.data?.user?.contributionsCollection?.contributionCalendar;

  const weeks: ContributionWeek[] = calendar?.weeks || [];
  const months: ContributionMonth[] = calendar?.months || [];
  const totalContributions: number = calendar?.totalContributions || 0;

  const getColor = (count: number) => {
    if (count === 0) return "bg-olive-200/60 dark:bg-[#1a1a1a]";
    if (count <= 3) return "bg-olive-300 dark:bg-neutral-700";
    if (count <= 6) return "bg-olive-400 dark:bg-neutral-600";
    if (count <= 9) return "bg-olive-500 dark:bg-neutral-400";
    return "bg-olive-600 dark:bg-neutral-200";
  };

  const getMonthLabels = () => {
    const labels: MonthLabel[] = [];
    let previousColumn = -99;

    weeks.forEach((week, weekIndex) => {
      const firstDayOfMonth = week.contributionDays.find((day) => {
        return new Date(day.date).getUTCDate() === 1;
      });

      const fallbackDay = weekIndex === 0 ? week.contributionDays[0] : null;
      const labelDate = firstDayOfMonth ?? fallbackDay;

      if (!labelDate) return;
      if (weekIndex - previousColumn < 3) return;

      labels.push({
        label: new Date(labelDate.date)
          .toLocaleString("en-US", { month: "short", timeZone: "UTC" })
          .slice(0, 3),
        columnStart: weekIndex + 1,
      });
      previousColumn = weekIndex;
    });

    if (labels.length > 0) return labels;

    return months.map((month, index) => ({
      label: month.name.substring(0, 3),
      columnStart: index * 4 + 1,
    }));
  };

  const monthLabels = getMonthLabels();

  return (
    <section className="flex w-full flex-col gap-3 px-4 py-3 font-jetbrains lg:w-[60%]">
      <div className="w-full">
        <div className="grid w-full grid-cols-53 gap-x-0.5 text-zinc-500">
          {monthLabels.map(({ label, columnStart }) => (
            <span
              key={`${label}-${columnStart}`}
              className="text-[10px] sm:text-[11px]"
              style={{ gridColumnStart: columnStart }}
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="grid w-full grid-cols-53 gap-x-0.5">
        {weeks.map((week, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-0.5">
            {colIndex === 0 &&
              Array.from({ length: 7 - week.contributionDays.length }).map(
                (_, i) => (
                  <div
                    key={`empty-top-${i}`}
                    className="w-full aspect-square rounded-[1px] sm:rounded-xs bg-transparent"
                  />
                ),
              )}

            {week.contributionDays.map((day, rowIndex) => (
              <div
                key={rowIndex}
                className={`w-full aspect-square rounded-[1px] sm:rounded-xs ${getColor(
                  day.contributionCount,
                )}`}
                title={`${day.contributionCount} contributions on ${day.date}`}
              />
            ))}

            {colIndex !== 0 &&
              week.contributionDays.length < 7 &&
              Array.from({ length: 7 - week.contributionDays.length }).map(
                (_, i) => (
                  <div
                    key={`empty-bottom-${i}`}
                    className="w-full aspect-square rounded-[1px] sm:rounded-xs bg-transparent"
                  />
                ),
              )}
          </div>
        ))}
      </div>

      <div className="mt-1 flex flex-wrap items-center justify-between gap-3 px-1">
        <span className="text-[11px] text-zinc-500">
          {totalContributions} activities in the last year
        </span>
        <div className="flex items-center gap-1.5">
          <span className="text-[11px] text-zinc-500 mr-1">Less</span>
          <div className="w-2.5 h-2.5 rounded-xs bg-olive-100 dark:bg-[#1a1a1a]" />
          <div className="w-2.5 h-2.5 rounded-xs bg-olive-300 dark:bg-neutral-700" />
          <div className="w-2.5 h-2.5 rounded-xs bg-olive-400 dark:bg-neutral-600" />
          <div className="w-2.5 h-2.5 rounded-xs bg-olive-500 dark:bg-neutral-400" />
          <div className="w-2.5 h-2.5 rounded-xs bg-olive-600 dark:bg-neutral-200" />
          <span className="text-[11px] text-zinc-500 ml-1">More</span>
        </div>
      </div>
    </section>
  );
}
