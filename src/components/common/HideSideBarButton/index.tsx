import SideBarIcon from "@/assets/icons/SideBarIcon";
import { Button } from "./style";
import { useSetRecoilState } from "recoil";
import { visibleSideBarState } from "@/recoil/sideBar.atom";

export default function HideSideBarButton() {
  const setVisibleSideBar = useSetRecoilState(visibleSideBarState);

  return (
    <Button onClick={() => setVisibleSideBar((prev) => !prev)}>
      <SideBarIcon />
    </Button>
  );
}
