'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/redux/store'
import { getHeader } from '@/redux/actions/headerActions'
import { ChevronDown, ChevronUp, Facebook, Instagram, Linkedin, Youtube, MessageCircle, Phone } from 'lucide-react'
import socialLinksData from '@/data/social-links.json'



export default function MobileMenu({ isMobileMenu, handleMobileMenu, menuItems = [], socialLinks = [] }: any) {
	const [showDestinations, setShowDestinations] = useState(false)
	const [showHotels, setShowHotels] = useState(false)
	const [showMore, setShowMore] = useState(false)
	const dispatch = useDispatch()
	const { header } = useSelector((state: RootState) => state.header)

	// Fetch header data once when component mounts if not already available
	useEffect(() => {
		if (!header || !header.mainMenu) {
			dispatch(getHeader() as any)
		}
	}, [])

	const handleMenuItemClick = () => {
		// Close the mobile menu when a menu item is clicked
		handleMobileMenu()
	}

	const toggleDestinations = () => {
		setShowDestinations(!showDestinations)
	}

	const toggleHotels = () => {
		setShowHotels(!showHotels)
	}

	const toggleMore = () => {
		setShowMore(!showMore)
	}

	return (
		<>
			{/* Offcanvas search */}
			<div className={`mobile-header-active mobile-header-wrapper-style perfect-scrollbar button-bg-2 ${isMobileMenu ? 'sidebar-visible' : ''}`}>
				<div className="mobile-header-wrapper-inner">
					<div className="mobile-header-logo">
						<Link className="navbar-brand d-flex main-logo align-items-center" href="/">
							<img 
								src={header?.logo?.src || "/assets/imgs/template/favicon.svg"} 
								alt={header?.logo?.alt || "Logo"}
								style={{ 
									maxWidth: '40px', 
									maxHeight: '40px', 
									width: 'auto', 
									height: 'auto', 
									objectFit: 'contain' 
								}} 
							/>
							<span className="fw-bold">{header?.logo?.text || ""}</span>
						</Link>
						<div 
							className={`burger-icon burger-icon-white border rounded-3 ${isMobileMenu ? 'burger-close' : ''}`} 
							onClick={handleMobileMenu}
							style={{ 
								backgroundColor: header?.mobileMenuButtonColor || 'transparent' 
							}}
						>
							<span className="burger-icon-top" />
							<span className="burger-icon-mid" />
							<span className="burger-icon-bottom" />
						</div>
					</div>
					<div className="mobile-header-content-area">
						<div className="perfect-scroll">
							<div className="mobile-menu-wrap mobile-header-border">
								<nav>
									<ul className="mobile-menu font-heading ps-0">
										{/* Destinations Menu Item - Only show if enabled in header settings */}
										{header?.showDestinationsDropdown && (
											<li className="mb-2">
												<div 
													className="d-flex align-items-center justify-content-between cursor-pointer py-3 px-2 border-bottom"
													onClick={toggleDestinations}
													style={{ cursor: 'pointer' }}
												>
													<span className="fw-bold text-dark">Destinations</span>
													{showDestinations ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
												</div>
												{showDestinations && (
													<ul className="ps-3 mt-3 mb-3 list-unstyled">
														{header?.destinationsCategories && header.destinationsCategories.length > 0 ? (
															<>
																{header.destinationsCategories.map((category: string, index: number) => (
																	<li key={index} className="mb-2">
																		<Link 
																			href={`/blog/kategori?category=${category}`}
																			onClick={handleMenuItemClick}
																			className="text-decoration-none d-block py-2 px-3 rounded hover-bg-light"
																			style={{ 
																				transition: 'all 0.2s ease',
																				border: '1px solid transparent'
																			}}
																		>
																			<span className="fw-bold text-dark" style={{ fontSize: '14px' }}>
																				{category}
																			</span>
																		</Link>
																	</li>
																))}
																{/* View All Option */}
																<li className="mb-2 mt-3 pt-2" style={{ borderTop: '1px solid #e9ecef' }}>
																	<Link 
																		href={`/blog/kategori?category=${header.destinationsCategories.join(',')}`}
																		onClick={handleMenuItemClick}
																		className="text-decoration-none d-block py-2 px-3 rounded hover-bg-light text-center"
																		style={{ 
																			transition: 'all 0.2s ease',
																			border: '1px solid transparent'
																		}}
																	>
																		<span className="fw-bold text-primary" style={{ fontSize: '14px' }}>
																			View All Destinations
																		</span>
																	</Link>
																</li>
															</>
														) : (
															<li className="mb-2">
																<div className="text-center py-2 px-3 text-muted">
																	<small>Kategoriler seçilmemiş</small>
																</div>
															</li>
														)}
													</ul>
												)}
											</li>
										)}

										{/* Hotels Menu Item - Only show if enabled in header settings */}
										{header?.showHotelsDropdown && (
											<li className="mb-2">
												<div 
													className="d-flex align-items-center justify-content-between cursor-pointer py-3 px-2 border-bottom"
													onClick={toggleHotels}
													style={{ cursor: 'pointer' }}
												>
													<span className="fw-bold text-dark">Hotels</span>
													{showHotels ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
												</div>
												{showHotels && (
													<ul className="ps-3 mt-3 mb-3 list-unstyled">
														{header?.hotelsCategories && header.hotelsCategories.length > 0 ? (
															<>
																{header.hotelsCategories.map((category: string, index: number) => (
																	<li key={index} className="mb-2">
																		<Link 
																			href={`/blog/kategori?category=${category}`}
																			onClick={handleMenuItemClick}
																			className="text-decoration-none d-block py-2 px-3 rounded hover-bg-light"
																			style={{ 
																				transition: 'all 0.2s ease',
																				border: '1px solid transparent'
																			}}
																		>
																			<span className="fw-bold text-dark" style={{ fontSize: '14px' }}>
																				{category}
																			</span>
																		</Link>
																	</li>
																))}
																{/* View All Option */}
																<li className="mb-2 mt-3 pt-2" style={{ borderTop: '1px solid #e9ecef' }}>
																	<Link 
																		href={`/blog/kategori?category=${header.hotelsCategories.join(',')}`}
																		onClick={handleMenuItemClick}
																		className="text-decoration-none d-block py-2 px-3 rounded hover-bg-light text-center"
																		style={{ 
																			transition: 'all 0.2s ease',
																			border: '1px solid transparent'
																		}}
																	>
																		<span className="fw-bold text-primary" style={{ fontSize: '14px' }}>
																			View All Hotels
																		</span>
																	</Link>
																</li>
															</>
														) : (
															<li className="mb-2">
																<div className="text-center py-2 px-3 text-muted">
																	<small>Kategoriler seçilmemiş</small>
																</div>
															</li>
														)}
													</ul>
												)}
											</li>
										)}

										{/* More Menu Item - Only show if enabled in header settings */}
										{header?.showMoreDropdown && (
											<li className="mb-2">
												<div 
													className="d-flex align-items-center justify-content-between cursor-pointer py-3 px-2 border-bottom"
													onClick={toggleMore}
													style={{ cursor: 'pointer' }}
												>
													<span className="fw-bold text-dark">More</span>
													{showMore ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
												</div>
												{showMore && (
													<ul className="ps-3 mt-3 mb-3 list-unstyled">
														{header?.moreCategories && header.moreCategories.length > 0 ? (
															<>
																{header.moreCategories.map((category: string, index: number) => (
																	<li key={index} className="mb-2">
																		<Link 
																			href={`/blog/kategori?category=${category}`}
																			onClick={handleMenuItemClick}
																			className="text-decoration-none d-block py-2 px-3 rounded hover-bg-light"
																			style={{ 
																				transition: 'all 0.2s ease',
																				border: '1px solid transparent'
																			}}
																		>
																			<span className="fw-bold text-dark" style={{ fontSize: '14px' }}>
																				{category}
																			</span>
																		</Link>
																	</li>
																))}
																{/* View All Option */}
																<li className="mb-2 mt-3 pt-2" style={{ borderTop: '1px solid #e9ecef' }}>
																	<Link 
																		href={`/blog/kategori?category=${header.moreCategories.join(',')}`}
																		onClick={handleMenuItemClick}
																		className="text-decoration-none d-block py-2 px-3 rounded hover-bg-light text-center"
																		style={{ 
																			transition: 'all 0.2s ease',
																			border: '1px solid transparent'
																		}}
																	>
																		<span className="fw-bold text-primary" style={{ fontSize: '14px' }}>
																			View All More
																		</span>
																	</Link>
																</li>
															</>
														) : (
															<li className="mb-2">
																<div className="text-center py-2 px-3 text-muted">
																	<small>Kategoriler seçilmemiş</small>
																</div>
															</li>
														)}
													</ul>
												)}
											</li>
										)}
										
										{/* Existing Menu Items */}
										{menuItems && menuItems.length > 0 ? menuItems.map((item: any, index: number) => (
											<li key={item._id || index} className="mb-2">
												<Link 
													href={item.link} 
													onClick={handleMenuItemClick}
													className="d-block py-3 px-2 border-bottom fw-bold text-dark text-decoration-none"
												>
													{item.name}
												</Link>
											</li>
										)) : header?.mainMenu?.map((item: any, index: number) => (
											<li key={item._id || index} className="mb-2">
												<Link 
													href={item.link} 
													onClick={handleMenuItemClick}
													className="d-block py-3 px-2 border-bottom fw-bold text-dark text-decoration-none"
												>
													{item.name}
												</Link>
											</li>
										))}
									</ul>
									
									{/* Social Links Section */}
									<div className="mt-4 pt-3 border-top">
										<h6 className="px-3 mb-3 fw-bold text-dark">Sosyal Medya</h6>
										<div className="d-flex justify-content-center gap-3 px-3">
											{socialLinksData.socialLinks.map((item: any, index: number) => {
												const socialIcons: { [key: string]: JSX.Element } = {
													Facebook: <Facebook size={20} color="#3b71fe" />,
													LinkedIn: <Linkedin size={20} color="#0077b5" />,
													Instagram: <Instagram size={20} color="#E4405F" />,
													YouTube: <Youtube size={20} color="#FF0000" />,
													WhatsApp: <MessageCircle size={20} color="#25D366" />,
													Phone: <Phone size={20} color="#3b71fe" />
												};

												if (socialIcons[item.icon]) {
													return (
														<a 
															href={item.link} 
															key={index} 
															target="_blank" 
															rel="noopener noreferrer"
															className="d-flex align-items-center justify-content-center rounded-circle"
															style={{
																width: '40px',
																height: '40px',
																backgroundColor: '#f8f9fa',
																border: '1px solid #e9ecef',
																transition: 'all 0.2s ease'
															}}
															onMouseEnter={(e) => {
																e.currentTarget.style.transform = 'scale(1.1)';
																e.currentTarget.style.backgroundColor = '#e9ecef';
															}}
															onMouseLeave={(e) => {
																e.currentTarget.style.transform = 'scale(1)';
																e.currentTarget.style.backgroundColor = '#f8f9fa';
															}}
														>
															{socialIcons[item.icon]}
														</a>
													)
												}
												return null;
											})}
										</div>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Custom CSS for mobile menu */}
			<style jsx>{`
				.hover-bg-light:hover {
					background-color: #f8f9fa !important;
					border-color: #e9ecef !important;
				}
				
				.mobile-menu li {
					border-bottom: 1px solid #f0f0f0;
				}
				
				.mobile-menu li:last-child {
					border-bottom: none;
				}
			`}</style>
		</>
	)
}
