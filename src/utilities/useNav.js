import { useContext, useEffect, useRef } from "react"
import { NavContext } from "../utilities/NavContext";
import { useOnScreen } from "../utilities/useOnScreen";

export const useNav = (navLinkId) => {
  const ref = useRef(null);
  const { setActiveLinkId } = useContext(NavContext);

  const isOnScreen = useOnScreen(ref);

  useEffect(() => {
    if(isOnScreen) {
      setActiveLinkId(navLinkId);
    }
  }, [isOnScreen, setActiveLinkId, navLinkId])

  return ref;
}