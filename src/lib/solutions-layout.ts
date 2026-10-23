// Layout da grade de soluções. Troque para 3 para a variação de três cards por linha.
export const SOLUTIONS_CARDS_PER_ROW = 2 as SolutionsCardsPerRow;
export type SolutionsCardsPerRow = 2 | 3;

export const SOLUTIONS_COLS_QUERY = "solucoesCols";

export function parseSolutionsCols(
  value: string | null,
  fallback: SolutionsCardsPerRow = SOLUTIONS_CARDS_PER_ROW,
): SolutionsCardsPerRow {
  return value === "2" || value === "3" ? (Number(value) as SolutionsCardsPerRow) : fallback;
}
