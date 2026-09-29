import { ArrowUp, Check } from "lucide-react";

const MESSAGES = [
  { from: "me", text: "Hey, how are you?" },
  { from: "them", text: "Hi! I'm working on it." },
  { from: "me", text: "Great!" },
] as const;

const TODO_ITEMS = [
  { label: "Complete portfolio", done: true },
  { label: "Practice React", done: true },
  { label: "Learn testing", done: false },
  { label: "Build project", done: false },
] as const;

const EXPENSE_BARS = [
  { label: "Food", height: "52%" },
  { label: "Travel", height: "78%" },
  { label: "Bills", height: "64%" },
  { label: "Other", height: "38%" },
] as const;

const KEY_ROW = ["AC", "±", "%", "÷"];
const NUMBER_ROWS = [
  ["7", "8", "9", "×"],
  ["4", "5", "6", "−"],
  ["1", "2", "3", "+"],
] as const;
const OPERATORS = new Set(["÷", "×", "−", "+"]);

export const ChatVisual = () => {
  return (
    <div aria-hidden className="rounded-lg border border-border bg-code p-3">
      <div className="flex items-center justify-between border-b border-border pb-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Chat
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.15em] text-accent-green">
          <span className="size-1.5 animate-pulse rounded-full bg-accent-green" />
          Connected
        </span>
      </div>
      <div className="space-y-2 py-3">
        {MESSAGES.map((message) => {
          const mine = message.from === "me";
          return (
            <div key={message.text} className={`flex ${mine ? "justify-end" : "justify-start"}`}>
              <span
                className={`max-w-[75%] rounded-lg px-2.5 py-1.5 text-[11px] leading-snug ${
                  mine
                    ? "rounded-tr-sm border border-accent/30 bg-accent/10 text-foreground"
                    : "rounded-tl-sm border border-border bg-card text-muted-foreground"
                }`}
              >
                {message.text}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex items-center justify-between gap-2 rounded-md border border-border bg-card px-2.5 py-1.5">
        <span className="truncate text-[10px] font-mono text-muted-foreground">
          Type a message...
        </span>
        <span className="grid size-5 shrink-0 place-items-center rounded bg-accent text-accent-foreground">
          <ArrowUp className="size-3" />
        </span>
      </div>
    </div>
  );
};

export const ExpenseVisual = () => {
  return (
    <div aria-hidden className="rounded-lg border border-border bg-code p-3">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          Total Expenses
        </span>
        <span className="font-mono text-lg font-semibold tabular-nums text-foreground">
          ₹ XX,XXX
        </span>
      </div>
      <div className="mt-4 flex h-24 items-end gap-2">
        {EXPENSE_BARS.map((bar) => (
          <div key={bar.label} className="flex h-full flex-1 flex-col justify-end gap-1.5">
            <div
              className="rounded-t-sm bg-accent-cyan/50 transition-colors duration-200 hover:bg-accent-cyan/70"
              style={{ height: bar.height }}
            />
            <span className="truncate text-center font-mono text-[8px] uppercase tracking-[0.1em] text-muted-foreground">
              {bar.label}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-1.5 h-px bg-border" />
    </div>
  );
};

export const TodoVisual = () => {
  return (
    <div aria-hidden className="rounded-lg border border-border bg-code p-4">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Tasks
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
          2 / 4 completed
        </span>
      </div>
      <ul className="mt-4 space-y-3.5">
        {TODO_ITEMS.map((item) => (
          <li key={item.label} className="flex items-center gap-3">
            <span
              className={`grid size-5 shrink-0 place-items-center rounded border transition-colors duration-200 ${
                item.done
                  ? "border-accent-green/60 bg-accent-green/15 text-accent-green"
                  : "border-border bg-card text-transparent"
              }`}
            >
              <Check className="size-3" />
            </span>
            <span
              className={`truncate text-[13px] ${
                item.done ? "text-muted-foreground line-through" : "text-foreground"
              }`}
            >
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const CalculatorVisual = () => {
  return (
    <div aria-hidden className="rounded-lg border border-border bg-code p-3">
      <div className="rounded-md border border-border bg-card px-3 py-2 text-right font-mono text-xl font-semibold tabular-nums text-foreground">
        128
      </div>
      <div className="mt-2.5 grid grid-cols-4 gap-1.5">
        {KEY_ROW.map((key) => (
          <span
            key={key}
            className={`rounded-md px-1 py-1.5 text-center font-mono text-[11px] transition-colors duration-200 ${
              key === "AC"
                ? "border border-accent-green/40 bg-accent-green/10 text-accent-green"
                : "border border-border bg-muted text-muted-foreground"
            }`}
          >
            {key}
          </span>
        ))}
        {NUMBER_ROWS.flat().map((key, index) => (
          <span
            key={`${key}-${index}`}
            className={`rounded-md px-1 py-1.5 text-center font-mono text-[11px] transition-colors duration-200 ${
              OPERATORS.has(key)
                ? "border border-accent-cyan/40 bg-accent-cyan/10 text-accent-cyan"
                : "border border-border bg-card text-foreground"
            }`}
          >
            {key}
          </span>
        ))}
        <span className="col-span-2 rounded-md border border-border bg-card px-1 py-1.5 text-center font-mono text-[11px] text-foreground">
          0
        </span>
        <span className="rounded-md border border-border bg-card px-1 py-1.5 text-center font-mono text-[11px] text-foreground">
          .
        </span>
        <span className="rounded-md border border-accent bg-accent px-1 py-1.5 text-center font-mono text-[11px] text-accent-foreground">
          =
        </span>
      </div>
    </div>
  );
};