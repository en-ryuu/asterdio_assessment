import { Image, ImageProps, Skeleton } from "@chakra-ui/react";
import { useState } from "react";

export default function LazyImage({ ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <Skeleton borderRadius="md" loading={isLoading}>
      <Image
        alt={props.alt}
        onLoad={() => setIsLoading(false)}
        onError={() => setIsLoading(false)}
        {...props}
      />
    </Skeleton>
  );
}
