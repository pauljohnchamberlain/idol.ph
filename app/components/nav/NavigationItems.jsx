import AuthLinks from "./AuthLinks";
import UserMenu from "./UserMenu";
import MobileUserMenu from "./MobileUserMenu";
import DashboardLink from "./DashboardLink";
import CreatorNav from "./CreatorNav";
import BrandNav from "./BrandNav";

export default function NavigationItems({
  session,
  isDropdownOpen,
  setIsDropdownOpen,
  closeMenu,
  isMobile,
}) {
  if (!session) {
    return <AuthLinks isMobile={isMobile} closeMenu={closeMenu} />;
  }

  const userRole = session.user.role;

  return (
    <>
      <DashboardLink
        role={userRole}
        closeMenu={closeMenu}
        isMobile={isMobile}
      />

      {userRole === "creator" && (
        <CreatorNav closeMenu={closeMenu} isMobile={isMobile} />
      )}

      {userRole === "brand" && (
        <BrandNav closeMenu={closeMenu} isMobile={isMobile} />
      )}

      {isMobile ? (
        <MobileUserMenu session={session} closeMenu={closeMenu} />
      ) : (
        <UserMenu
          session={session}
          isDropdownOpen={isDropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
        />
      )}
    </>
  );
}
