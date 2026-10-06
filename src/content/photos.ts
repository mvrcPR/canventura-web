import chef from "../assets/photography/originals/supplied/DSC_0580.png";
import facade from "../assets/photography/originals/supplied/DSC_1047.png";
import founders from "../assets/photography/originals/press/josep-merce-pous.jpg";
import family from "../assets/photography/originals/press/can-ventura-balcony-pere-virgili.jpg";
import house from "../assets/photography/originals/press/can-ventura-facade-albert-ayma-1983.jpg";
import dish0053 from "../assets/photography/originals/supplied/DSC_0053.png";
import dish0029 from "../assets/photography/originals/supplied/DSC_0029.png";
import dish0084 from "../assets/photography/originals/supplied/DSC_0084.png";
import dish0058 from "../assets/photography/originals/supplied/DSC_0058.png";
import dish0090 from "../assets/photography/originals/supplied/DSC_0090.png";
import dish0075 from "../assets/photography/originals/supplied/DSC_0075.png";
import dish0017 from "../assets/photography/originals/supplied/DSC_0017.png";
import dish0649 from "../assets/photography/originals/supplied/DSC_0649.png";
import dish0659 from "../assets/photography/originals/supplied/DSC_0659.png";
import dish0636 from "../assets/photography/originals/supplied/DSC_0636.png";
import dish0594 from "../assets/photography/originals/supplied/DSC_0594.png";
import dish1072 from "../assets/photography/originals/supplied/DSC_1072.png";
import dish1086 from "../assets/photography/originals/supplied/DSC_1086.png";
import dish0109 from "../assets/photography/originals/supplied/DSC_0109.png";
import dish0420 from "../assets/photography/originals/supplied/DSC_0420.png";
import dish0477 from "../assets/photography/originals/supplied/DSC_0477.png";
import dish0490 from "../assets/photography/originals/supplied/DSC_0490.png";
import dish0522 from "../assets/photography/originals/supplied/DSC_0522.png";
import dish0531 from "../assets/photography/originals/supplied/DSC_0531.png";
import dish0445 from "../assets/photography/originals/supplied/DSC_0445.png";
import dish0918 from "../assets/photography/originals/supplied/DSC_0918.png";
import dish0436 from "../assets/photography/originals/supplied/DSC_0436.png";
import dish0647 from "../assets/photography/originals/supplied/DSC_0647.png";
import dish0909 from "../assets/photography/originals/supplied/DSC_0909.png";
import dish0486 from "../assets/photography/originals/supplied/DSC_0486.png";
import dish1198 from "../assets/photography/originals/supplied/DSC_1198.png";

export const photos = { chef, facade, founders, family, house };

// Import only the curated originals; globbing the entire archive also ships
// unused PNGs. Trotters stay at index 2 between the first mountain dishes.
const kitchenSelection = [
  [dish0053, "cannelloni", "center 95%"],
  [dish0029, "fillet", "center bottom"],
  [dish0084, "trotters", "center"],
  [dish0058, "cannelloni", "center"],
  [dish0090, "trotters", "center 70%"],
  [dish0075, "cannelloni", "center bottom"],
  [dish0017, "fillet", "center 40%"],
  [dish0649, "duckMagret", "center top"],
  [dish0659, "duckMagret", "center 55%"],
  [dish0636, "trinxat", "center 60%"],
  [dish0594, "wildAsparagus", "center"],
  [dish1072, "mountainRice", "center 95%"],
  [dish1086, "mountainRice", "center 85%"],
  [dish0109, "duckPears", "center 65%"],
  [dish0420, "chickenLangoustines", "center"],
  [dish0477, "chickenLangoustines", "center"],
  [dish0490, "organicBeef", "center 65%"],
  [dish0522, "pearVichyssoise", "center bottom"],
  [dish0531, "pearVichyssoise", "center bottom"],
  [dish0445, "donut", "center bottom"],
  [dish0918, "strawberrySalmorejo", "center 80%"],
  [dish0436, "cod", "center 65%"],
  [dish0647, "scallops", "center 85%"],
  [dish0909, "rumpsteak", "center 60%"],
  [dish0486, "botifarraTrinxat", "center 70%"],
  [dish1198, "salmon", "25% center"],
] as const;

export const kitchenPhotography = kitchenSelection.map(([image, subject, objectPosition]) => ({
  image, subject, objectPosition,
}));
