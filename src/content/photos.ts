import chef from "../assets/photography/originals/supplied/DSC_0580.png";
import facade from "../assets/photography/originals/supplied/DSC_1043.png";
import dish from "../assets/photography/originals/supplied/DSC_0084.png";
import grill from "../assets/photography/originals/supplied/DSC_0017.png";
import room from "../assets/photography/originals/supplied/DSC_0478.png";
import roundTable from "../assets/photography/originals/supplied/DSC_0421.png";
import window from "../assets/photography/originals/supplied/DSC_0411.png";
import details from "../assets/photography/originals/supplied/DSC_1041.png";
import kitchen from "../assets/photography/originals/Restaurante_17.webp";
import hands from "../assets/photography/originals/supplied/DSC_0552 2.png";
import season from "../assets/photography/originals/supplied/DSC_1195.png";
export const photos = {
  chef,
  facade,
  dish,
  grill,
  room,
  roundTable,
  window,
  details,
  kitchen,
  hands,
  season,
};

// Food-only sequence curated from the supplied originals. Keep the trotters
// at index 2 so the gallery opens on them, between the early mountain dishes.
const supplied = import.meta.glob<{ default: import("astro").ImageMetadata }>(
  "../assets/photography/originals/supplied/*.png",
  { eager: true },
);

const kitchenSelection = [
  ["DSC_0053.png", "cannelloni"],
  ["DSC_0029.png", "fillet"],
  ["DSC_0084.png", "trotters"],
  ["DSC_0058.png", "cannelloni"],
  ["DSC_0090.png", "trotters"],
  ["DSC_0075.png", "cannelloni"],
  ["DSC_0017.png", "grill"],
  ["DSC_0649.png", "dish"],
  ["DSC_0659.png", "dish"],
  ["DSC_0636.png", "dish"],
  ["DSC_0594.png", "dish"],
  ["DSC_1072.png", "dish"],
  ["DSC_1086.png", "dish"],
  ["DSC_0109.png", "dish"],
  ["DSC_0420.png", "dish"],
  ["DSC_0477.png", "dish"],
  ["DSC_0490.png", "dish"],
  ["DSC_0522.png", "dish"],
  ["DSC_0531.png", "dish"],
  ["DSC_0445.png", "dish"],
  ["DSC_0918.png", "dish"],
  ["DSC_0436.png", "dish"],
  ["DSC_0647.png", "dish"],
  ["DSC_0668.png", "dish"],
  ["DSC_0909.png", "dish"],
  ["DSC_0486.png", "dish"],
  ["DSC_1198.png", "salmon"],
] as const;

const kitchenFraming: Partial<
  Record<(typeof kitchenSelection)[number][0], string>
> = {
  "DSC_0053.png": "center 95%",
  "DSC_0029.png": "center bottom",
  "DSC_0090.png": "center 70%",
  "DSC_0075.png": "center bottom",
  "DSC_0017.png": "center 40%",
  "DSC_0649.png": "center top",
  "DSC_0659.png": "center 55%",
  "DSC_0636.png": "center 60%",
  "DSC_1072.png": "center 95%",
  "DSC_1086.png": "center 85%",
  "DSC_0109.png": "center 65%",
  "DSC_0490.png": "center 65%",
  "DSC_0522.png": "center bottom",
  "DSC_0531.png": "center bottom",
  "DSC_0445.png": "center bottom",
  "DSC_0918.png": "center 80%",
  "DSC_0436.png": "center 65%",
  "DSC_0647.png": "center 85%",
  "DSC_0668.png": "center bottom",
  "DSC_0909.png": "center 60%",
  "DSC_0486.png": "center 70%",
  "DSC_1198.png": "25% center",
};

export const kitchenPhotography = kitchenSelection.map(([file, subject]) => {
  const image =
    supplied[`../assets/photography/originals/supplied/${file}`].default;
  return {
    image,
    subject,
    objectPosition: kitchenFraming[file] ?? "center",
  };
});
