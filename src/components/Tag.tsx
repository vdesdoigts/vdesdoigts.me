import { Badge } from "@chakra-ui/react";

export default function Tag({
  bgColor,
  color,
  title,
}: {
  bgColor: string;
  color: string;
  title: string;
}) {
  return (
    <Badge
      bgColor={bgColor}
      color={color}
      fontSize="sm"
      fontWeight="400"
      px={2}
      textTransform="initial"
    >
      {title}
    </Badge>
  );
}
