import type { ProjectVisualVariant } from "@/utils/types";
import ClockVisual from "@/components/projects/ClockVisual";
import {
  ChatVisual,
  CalculatorVisual,
  ExpenseVisual,
  TodoVisual,
} from "@/components/projects/StaticVisuals";

interface ProductVisualProps {
  variant: ProjectVisualVariant;
}

const ProductVisual = ({ variant }: ProductVisualProps) => {
  switch (variant) {
    case "chat":
      return <ChatVisual />;
    case "expense":
      return <ExpenseVisual />;
    case "todo":
      return <TodoVisual />;
    case "clock":
      return <ClockVisual />;
    case "calculator":
      return <CalculatorVisual />;
    default:
      return null;
  }
};

export default ProductVisual;