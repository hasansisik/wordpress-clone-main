import Link from 'next/link'
import MobileMenu from '../MobileMenu'
import Search from '../Search'
import OffCanvas from '../OffCanvas'
import ThemeSwitch from '@/components/elements/ThemeSwitch'
import Menu from '../Menu'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { getHeader } from '@/redux/actions/headerActions'
import { getMyProfile } from '@/redux/actions/userActions'
import { User, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Phone } from 'lucide-react'
import socialLinksData from '@/data/social-links.json'

export default function Header5({ scroll, hideHeader, isMobileMenu, handleMobileMenu, isSearch, handleSearch, isOffCanvas, handleOffCanvas }: any) {
	const dispatch = useDispatch();
	const { header, loading } = useSelector((state: RootState) => state.header);
	const { user } = useSelector((state: RootState) => state.user);

	// Always fetch header data when component mounts
	useEffect(() => {
		dispatch(getHeader() as any);
		dispatch(getMyProfile() as any);
	}, [dispatch]) // Dependency on dispatch ensures this runs only when dispatch changes (effectively once)

	// Display loading state while header data is being fetched
	if (loading || !header) {
		return 
	}

	return (
		<>
			<div className="top-bar position-relative ">
				<div className="container-fluid" style={{ backgroundColor: header.topBarColor || '#3b71fe', color: header.topBarTextColor || '#ffffff' }}>
					<div className="container-fluid py-2 px-8">
						<div className="d-flex flex-column flex-lg-row justify-content-between align-items-center">
							<div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
								{header.topBarItems && header.topBarItems.map((item: any, index: number) => {
									if (item.name === "Email" && item.content) {
										return (
											<a href={`mailto:${item.content}`} className="pe-4 d-none d-md-flex" key={index} style={{ color: header.topBarTextColor || '#ffffff' }}>
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
													<path d="M3.9585 6.95834C3.9585 6.03786 4.70469 5.29167 5.62516 5.29167H14.3752C15.2957 5.29167 16.0418 6.03786 16.0418 6.95834V14.0417C16.0418 14.9622 15.2957 15.7083 14.3752 15.7083H5.62516C4.70469 15.7083 3.9585 14.9622 3.9585 14.0417V6.95834Z" stroke={header.topBarTextColor || '#ffffff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M4.5835 5.91667L10.0002 10.7083L15.4168 5.91667" stroke={header.topBarTextColor || '#ffffff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
												<span className="ps-1 fs-7">{item.content}</span>
											</a>
										)
									}
									if (item.name === "Address" && item.content) {
										return (
											<div className="location d-flex align-items-center" key={index} style={{ color: header.topBarTextColor || '#ffffff' }}>
												<svg xmlns="http://www.w3.org/2000/svg" width={20} height={21} viewBox="0 0 20 21" fill="none">
													<path d="M5.62516 16.5418H14.3751C15.2956 16.5418 16.0418 15.7957 16.0418 14.8752V8.6252L10.0001 4.45853L3.9585 8.6252V14.8752C3.9585 15.7957 4.7047 16.5418 5.62516 16.5418Z" stroke={header.topBarTextColor || '#ffffff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
													<path d="M8.12476 13.6244C8.12476 12.7039 8.87098 11.9577 9.7914 11.9577H10.2081C11.1286 11.9577 11.8747 12.7039 11.8747 13.6244V16.5411H8.12476V13.6244Z" stroke={header.topBarTextColor || '#ffffff'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
												<span className="ps-1 fs-7">{item.content}</span>
											</div>
										)
									}
									return null;
								})}
							</div>
							<div className="d-flex justify-content-center justify-content-lg-end align-items-center">

								<span className="pe-3 ps-1 fs-7">{header.workingHours || "Mon-Fri: 10:00am - 09:00pm"}</span>
								{socialLinksData.socialLinks.map((item: any, index: number) => {
									const socialIcons: { [key: string]: JSX.Element } = {
										Facebook: <Facebook size={16} color={header.topBarTextColor || '#ffffff'} />,
										LinkedIn: <Linkedin size={16} color={header.topBarTextColor || '#ffffff'} />,
										Instagram: <Instagram size={16} color={header.topBarTextColor || '#ffffff'} />,
										YouTube: <Youtube size={16} color={header.topBarTextColor || '#ffffff'} />,
										WhatsApp: <MessageCircle size={16} color={header.topBarTextColor || '#ffffff'} />,
										Phone: <Phone size={16} color={header.topBarTextColor || '#ffffff'} />
									};

									if (socialIcons[item.icon]) {
										return (
											<a href={item.link} className="icon-shape icon-md" style={{ color: header.topBarTextColor || '#ffffff' }} key={index} target="_blank" rel="noopener noreferrer">
												{socialIcons[item.icon]}
											</a>
										)
									}
									return null;
								})}
							</div>
						</div>
					</div>
				</div>
			</div>

			<header>
				<nav 
					className={`navbar navbar-expand-lg navbar-light w-100 border-bottom z-5 ${scroll ? 'navbar-stick' : ''}`} 
					style={{ 
						position: `${scroll ? "fixed" : "relative"}`, 
						top: `${scroll ? (hideHeader ? "-100px" : "0") : "auto"}`, 
						bottom: `${scroll ? "auto" : "0"}`,
						transition: "top 0.3s ease-in-out"
					}}
				>
					<div className="container-fluid px-lg-8">
						<Link className="navbar-brand d-flex main-logo align-items-center gap-3" href="/">
							<img 
								src={header.logo.src} 
								alt={header.logo.alt} 
								style={{ 
									maxWidth: '40px', 
									maxHeight: '40px', 
									width: 'auto', 
									height: 'auto', 
									objectFit: 'contain',
								}} 
							/>
							<span>{header.logo.text}</span>
						</Link>
						<Menu menuItems={header.mainMenu} />
						<div className="d-flex align-items-center pe-5 pe-lg-0 me-5 me-lg-0">
							<div className="d-lg-flex align-items-center pe-8 d-none">
								{header.topBarItems && header.topBarItems.map((item: any, index: number) => {
									if (item.name === "Phone" && item.content) {
										return (
											<div key={index} className="d-flex flex-row align-items-center" >
												<a href={`tel:${item.content.replace(/\s+/g, '')}`} 
													className="icon-shape icon-lg rounded-circle mx-3"
													style={{ 
														backgroundColor: header.phoneIconBgColor || '#3b71fe'
													}}
												>
													<svg className="d-block" xmlns="http://www.w3.org/2000/svg" width={25} height={25} viewBox="0 0 25 25" fill="none">
														<path 
															d="M9.39286 5.25H6.56818C5.84017 5.25 5.25 5.84017 5.25 6.56818C5.25 13.8483 11.1517 19.75 18.4318 19.75C19.1598 19.75 19.75 19.1598 19.75 18.4318V15.6071L16.6429 13.5357L15.0317 15.1468C14.7519 15.4267 14.3337 15.5137 13.9821 15.3321C13.3858 15.024 12.4181 14.4452 11.4643 13.5357C10.4877 12.6045 9.91548 11.6011 9.62829 10.994C9.46734 10.6537 9.56052 10.2609 9.82669 9.99474L11.4643 8.35714L9.39286 5.25Z" 
															stroke={header.phoneIconColor || "#ffffff"}
															strokeWidth="1.5" 
															strokeLinecap="round" 
															strokeLinejoin="round" 
														/>
													</svg>
												</a>
												<div >
													<p className="mb-0 text-500 fs-8">{header.phoneQuestionText || "Have Any Questions?"}</p>
													<p className="mb-0 text-900 fw-bold">{item.content}</p>
												</div>
											</div>
										)
									}
									return null;
								})}
							</div>
							{header.showDarkModeToggle && <ThemeSwitch />}
							
							{/* Kullanıcı durumuna göre button'ları göster */}
							{user?._id ? (
								/* Kullanıcı giriş yapmışsa profil butonu göster */
								<Link 
									href="/profile" 
									className="ms-2 d-flex align-items-center justify-content-center bg-white rounded icon-shape border icon-md"
									style={{
										width: '32px',
										height: '32px',
										color: '#111827'
									}}
								>
									<User size={18} />
								</Link>
							) : (
								/* Kullanıcı giriş yapmamışsa action button'ları göster */
								<>
									{header.showActionButton && (
										<Link 
											href={header.links.freeTrialLink.href} 
											className="btn d-none d-md-block ms-2 "
											style={{
												backgroundColor: header.buttonColor || "#3b71fe",
												color: header.buttonTextColor || "#ffffff"
											}}
										>
											{header.links.freeTrialLink.text}
											
										</Link>
									)}
									
									{header.showSecondActionButton && (
										<Link 
											href={header.secondActionButtonLink || header.links?.secondActionButton?.href || "/register"} 
											className="btn d-none d-md-block ms-2 "
											style={{
												backgroundColor: header.secondButtonColor || "#ffffff",
												color: header.secondButtonTextColor || "#3b71fe",
												border: `1px solid ${header.secondButtonBorderColor || "#3b71fe"}`
											}}
										>
											{header.secondActionButtonText || header.links?.secondActionButton?.text || "Kayıt Ol"}
											
										</Link>
									)}
								</>
							)}
							<div 
								className="burger-icon burger-icon-white border rounded-3" 
								onClick={handleMobileMenu}
								style={{ backgroundColor: header.mobileMenuButtonColor || 'transparent' }}
							>
								<span className="burger-icon-top" />
								<span className="burger-icon-mid" />
								<span className="burger-icon-bottom" />
							</div>
						</div>
					</div>
				</nav>
				
				<OffCanvas handleOffCanvas={handleOffCanvas} isOffCanvas={isOffCanvas} />
				<Search isSearch={isSearch} handleSearch={handleSearch} />
				<MobileMenu 
					handleMobileMenu={handleMobileMenu} 
					isMobileMenu={isMobileMenu} 
					menuItems={header.mainMenu}
					socialLinks={socialLinksData.socialLinks} 
				/>
			</header>

		</>
	)
}
