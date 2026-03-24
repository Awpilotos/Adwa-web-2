import { memo } from "react";

const ImageItem = memo(function ImageItem({ item, startCounters }) {
  return (
    <ImageListItem>
      <Box sx={{ pt: `${item.pd}px` }}>
        <Box sx={{ position: "relative" }}>
          <img
            src={item.src}
            alt={item.alt || ""}
            loading="lazy"
            decoding="async"
            style={{
              ...imageStyle,
              aspectRatio: item.aspectRatio,
            }}
          />

          <Typography
            sx={{
              position: "absolute",
              color: "white",
              textAlign: item.textAlign,
              ...(item.position || {}),
            }}
          >
            {item.value && (
              <Box component="span" sx={counterTextStyles}>
                {item.prefix}
                <Counter value={item.value} start={startCounters} />
                {item.suffix}
              </Box>
            )}

            <Box component="span">
              {item.description}
            </Box>
          </Typography>
        </Box>
      </Box>
    </ImageListItem>
  );
});