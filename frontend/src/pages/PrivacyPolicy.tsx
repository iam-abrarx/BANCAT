import { Container, Typography, Box, Paper } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { SEOHead } from '../components/common/SEOHead';

export const PrivacyPolicy = () => {
    const { i18n } = useTranslation();

    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            {i18n.language === 'en' ? 'Privacy Policy' : 'ব্যক্তিগত গোপনীয়তা নীতি (Privacy Policy)'}
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary">
                            {i18n.language === 'en' ? 'Last Updated: March 10, 2021' : 'সর্বশেষ হালনাগাদ: ১০ মার্চ, ২০২১'}
                        </Typography>
                    </Box>

                    <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                        {i18n.language === 'en' ? (
                            // English Content
                            <>
                                <Typography variant="body1" paragraph>
                                    This Privacy Policy (“Policy”) describes and governs the information collection, use, and sharing practices of Bangladesh Cancer Aid Trust. (“Bangladesh Cancer Aid Trust,” “BANCAT,” “we,” “us,” and “our”) with respect to your use of Bangladesh Cancer Aid Trust websites, products, tools, promotions, and any other services that reference this Policy (collectively, the “Services”).
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Before you use or submit any information through or in connection with the Services, please carefully review this Policy. By using any part of the Services, regardless of how you access the Services, you consent to the collection, use, and disclosure of your information as further outlined in this Policy. IF YOU DO NOT AGREE TO THIS POLICY, PLEASE DO NOT USE THE SERVICES. We will continue to evaluate this Policy as we update and expand the Services and our offerings, and we may make changes to the Policy accordingly. Any changes will be posted here and you should check this page periodically for updates. If we make material changes to this Policy, we will provide you with notice as required by law. Your continued use of the Services will signify acceptance of the terms of the updated Policy.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Undefined capitalized terms used herein shall have the definitions as set forth in our Terms of Use.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Information We Collect
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We collect information in multiple ways, including when you provide information directly to us, and when we passively collect information from you, such as from your browser or device.
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Information You Provide Directly To Us
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may collect information from you in a variety of ways, such as when you:
                                </Typography>
                                <ul>
                                    <li>Register for an account;</li>
                                    <li>Complete your Member profile;</li>
                                    <li>Donate to a Campaign;</li>
                                    <li>Create a Campaign;</li>
                                    <li>Fill out a survey or provide us with Feedback;</li>
                                    <li>Request certain features (e.g., newsletters, updates, and other products);</li>
                                    <li>Use certain features that require your information to function (e.g., portions of our Services that require log-in to participate);</li>
                                    <li>Communicate with us; or</li>
                                    <li>Post User Content, including comments, to or on any of our Services.</li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    The information you provide directly to us may include, but is not limited to: (i) name; (ii) email address; (iii) mailing address; (iv) phone number; (v) birthdate; (vi) workplace information; (vi) photographs and audio/video content; and (vii) financial information, including information needed to verify your identity.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our Services may include Campaign boards, chat rooms, forums, message boards, news groups and other community tools that are publicly visible to other Members and users. Please be considerate and respectful of others while using the community to share your opinions. We reserve the right, but do not have the obligation, to review and monitor such postings or any other content on our Services, and to remove postings or content that may be viewed as inappropriate or offensive to others.
                                </Typography>


                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Information that is Passively or Automatically Collected
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Device/Usage Information
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may automatically collect certain information about the computer or devices (including mobile devices or tablets) you use to access the Services. As described further below, we may collect and analyze information such as (a) IP addresses, geolocation information, unique device identifiers, IMEI and TCP/IP address, and other information about your computer or device(s), browser types, browser language, operating system, mobile device carrier information, the state or country from which you accessed the Services; and (b) information related to the ways in which you interact with the Services, such as: referring and exit web pages and URLs, platform type, the number of clicks, domain names, landing pages, pages and content viewed and the order of those pages, statistical information about the use of the Services, the amount of time spent on particular pages, the date and time you used the Services, the frequency of your use of the Services, error logs, and other similar information. As described further below, we may use third-party analytics providers and technologies, including cookies and similar tools, to assist in collecting this information.
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Cookies and Other Electronic Technologies
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may also collect data about your use of the Services through the use of Internet server logs, cookies and/or tracking pixels. A web server log is a file where website activity is stored. A cookie is a small text file that is placed on your computer when you visit a website, that enables us to: (i) recognize your computer; (ii) store your preferences and settings; (iii) understand the web pages of the Services you have visited; (iv), enhance your user experience by delivering content and advertisements specific to your inferred interests; (v) perform searches and analytics; and (vi) assist with security administrative functions. Some cookies are placed in your browser cache while those associated with Flash technologies are stored with your Adobe Flash Player files. Tracking pixels (sometimes referred to as web beacons or clear GIFs) are tiny electronic tags with a unique identifier embedded in websites, online ads and/or email, and that are designed to provide usage information like ad impressions or clicks, measure popularity of the Services and associated advertising, and to access user cookies. We also may include Web beacons in email messages, newsletters and other electronic communications to determine whether the message has been opened and for other analytics, personalization and advertising. As we adopt additional technologies, we may also gather additional information through other methods.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Please note that you can change your settings to notify you when a cookie is being set or updated, or to block cookies altogether. Please consult the "Help" section of your browser for more information (e.g., Internet Explorer; Google Chrome; Mozilla Firefox; or Apple Safari). You can also manage the use of Flash technologies, including cookies and local storage objects with the Flash management tools available at Adobe's website. Please note that by blocking any or all cookies, you may not have access to certain features or offerings of the Services.
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Location Information
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may collect different types of information about your location, including general information (e.g., IP address, zip code) and more specific information (e.g., GPS-based functionality on mobile devices used to access the Services), and may use that information to customize the Services with location-based information and features. We may use such information to improve the Services, including providing you with location-based features (e.g. to identify Campaigns that may interest you). To deliver customized content and advertising, we may share your location information with our agents, vendors, or advertisers. If you access the Services through a mobile device and you do not want your device to provide us with location-tracking information, you can disable the GPS or other location-tracking functions on your device, provided your device allows you to do this. See your device manufacturer’s instructions for further details. If you disable certain functions, you may be unable to use certain parts of the Services.
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Information from Social Networking Sites and Other Third Parties
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may collect information about you or others through our affiliates or through non-affiliated third parties. For example, you may be able to access the Services through a social networking account, such as Facebook. If you access the Services through your Services account, you may allow us to have access to certain information in your Services profile. This may include your name, profile picture, gender, networks, user IDs, list of friends, location, date of birth, email address, photos, videos, people you follow and/or who follow you, and/or your posts or "likes."
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Social networking sites, such as Facebook, have their own policies for handling your information. For a description of how these sites may use and disclose your information, including any information you make public, please consult the sites' privacy policies. We have no control over how any third-party site uses or discloses the personal information it collects about you.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may also collect information about you or others through non-affiliated third parties. For example, to the extent permitted by law, we may, in our sole discretion, ask for and collect supplemental information from third parties, such as information about your organization’s history, information to verify your identity or trustworthiness, or for other fraud or safety protection purposes. We may combine information that we collect from you through the Services with information that we obtain from such third parties and information derived from any other products or services we provide.
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Collection of information across personal devices
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Sometimes we (or our service providers) may use the information we collect - for instance, log-in credentials, IP addresses, hashed email addresses, and unique mobile device identifiers - to locate or try to locate the same unique users across multiple browsers or devices (such as smartphones, tablets, or computers), or work with providers that do this, in order to better tailor content, features, and advertising, and provide you with a seamless experience across the devices you use to access the Services.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    How We Use Your Information
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may use the information we collect from and about you for the following purposes:
                                </Typography>
                                <ul>
                                    <li>For the purposes for which you provided it;</li>
                                    <li>To recognize and authenticate you on the Services;</li>
                                    <li>To initiate or to provide the features, services and products available through the Services;</li>
                                    <li>To send you information about your relationship or transactions with us, account alerts, or other communications, such as newsletters to which you have subscribed;</li>
                                    <li>To contact you with information, surveys, or Campaigns that we believe may be of interest to you both regarding our products and Services and those of third parties;</li>
                                    <li>To process and respond to your inquiries or to request your Feedback;</li>
                                    <li>For internal research and reporting;</li>
                                    <li>To improve the content and features of the Services or develop new Services;</li>
                                    <li>To personalize the content and advertising that you see on the Services or on other websites;</li>
                                    <li>For internal recruiting purposes;</li>
                                    <li>With your consent, to call or send you SMS messages regarding your relationship with us or offers or services that may interest you;</li>
                                    <li>To enforce the legal terms that govern your use of the Services; and</li>
                                    <li>To administer and troubleshoot the Services.</li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    Please note that we may combine information that we collect from you and about you (including automatically-collected information) with information we obtain about you from our affiliates and/or non-affiliated third parties, and use such combined information in accordance with this Policy.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may aggregate and/or de-identify information collected through the Services. We may use de-identified and/or aggregated data for any purpose, including without limitation for research and marketing purposes, and may also share such data with any third parties, including advertisers, promotional partners, Campaign Organizers, and/or others.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    When We Disclose Your Information
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may disclose and/or share your information to or with any non-affiliated third parties under the following circumstances:
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>Consent:</strong> We may disclose your information to any third parties based on your consent to do so.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>Service Providers:</strong> We may provide access to or share your information with select third parties who perform services on our behalf, including without limitation marketing, market research, customer support, data storage, analysis and processing, and legal services.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>Protection of Bangladesh Cancer Aid Trust and Others:</strong> You acknowledge, consent, and agree that Bangladesh Cancer Aid Trust may access, preserve, and disclose your information and/or any User Content you submit or make available for inclusion on the Services, if required to do so by law or in a good faith belief that such access, preservation, or disclosure is permitted by Bangladesh Cancer Aid Trust’s Privacy Policy or reasonably necessary or appropriate for any of the following reasons: (1) to comply with legal process; (2) to enforce these Terms, our Policy, or other contracts with you, including investigation of potential violations thereof; (3) to respond to claims that any content violates the rights of third parties; (4) to respond to your requests for customer service; and/or (5) to protect the rights, property, or personal safety of Bangladesh Cancer Aid Trust, its agents and affiliates, its users, and the public. This includes exchanging information with other companies and organizations for fraud protection, and spam/malware prevention, and similar purposes.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>Business Transfers:</strong> As we continue to develop our business, we may buy, merge or partner with other companies. In such transactions, (including in contemplation of such transactions, e.g., due diligence) user information may be among the transferred assets. If a portion or all of Bangladesh Cancer Aid Trust’s assets are sold or transferred to a third-party, customer information (including your email address) would likely be one of the transferred business assets.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>Campaigns and Public Forums:</strong> Campaigns on our Services may be publicly-accessible. We may also offer community forums. You should be aware that any information you provide in these areas may be read, collected, and used by others who access them. Please also remember that if you choose to provide information on such features of the Services, individuals reading such information may use or disclose it to other individuals or entities without our control and without your knowledge, and search engines may index that information. We therefore urge you to think carefully about what you choose to disclose through such forums and make sure it’s information you want to share publically.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Online Analytics and Advertising
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Analytics
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may use third-party web analytics services (such as those of Google Analytics) on our Services to collect and analyze the information discussed above, and to engage in auditing, research or reporting. The information (including your IP address) collected by various analytics technologies described in the “Cookies and Similar Technologies” section will be disclosed to or collected directly by these service providers, who use the information to evaluate your use of the Services, including by noting the third-party website from which you arrive, analyzing usage trends, assisting with fraud prevention, and providing certain features to you. To prevent Google Analytics from using your information for analytics, you may install the Google Analytics Opt-out Browser Add-on by clicking here. We may also use Adobe Analytics to analyze and optimize the performance of our websites, advertising, and content. To learn more about Adobe’s privacy practices and to make choices regarding Adobe’s tracking activities, please click here.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    If you receive email from us, we may use certain analytics tools, such as clear GIFs to capture data such as when you open our message or click on any links or banners our email contains. This data allows us to gauge the effectiveness of our communications and marketing campaigns.
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Online Advertising
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may use third-party advertising technologies that allow for the delivery of relevant content and advertising on our Services, as well as on other websites you visit. We also work with website analytics and advertising partners, including Google, and Facebook, to deliver Bangladesh Cancer Aid Trust ads on third party publisher websites, and these partners may set cookies on your device's web browser. The ads may be based on various factors such as the content of the page you are visiting, information you enter such as your age and gender, your searches, demographic data, user-generated content, and other information we collect from you. These ads may be based on your current activity or your activity over time and across other websites and online services and may be tailored to your interests.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We may also allow other third parties (e.g., ad networks and ad servers such as Google Analytics and others) to serve tailored ads to you on the Services, other sites, and in other applications, and to access their own cookies or other tracking technologies on your computer, mobile phone, or other device you use to access the Services. We may provide our customer information (such as email addresses) to service providers, who may “match” this information in de-identified form to cookies (or mobile ad identifiers) and other proprietary IDs, in order to target or “retarget” you with ads when you visit other websites and mobile applications. (You may opt out of many of these service providers as described in the next paragraph.)
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We neither have access to, nor does this Policy govern, the use of cookies or other tracking technologies that may be placed on your computer, mobile phone, or other device you use to access the Services by non-affiliated, third-party ad technology, ad servers, ad networks or any other non-affiliated third parties. Those parties that use these technologies may offer you a way to opt out of ad targeting as described below. You may receive tailored advertising on your computer through a web browser. If you are interested in more information about tailored browser advertising and how you can generally control cookies from being put on your computer to deliver tailored advertising, you may visit the Network Advertising Initiative’s Consumer Opt-Out link or the Digital Advertising Alliance’s Consumer Opt-Out link to opt-out of receiving tailored advertising from companies that participate in those programs. To opt out of Google Analytics for display advertising or customize Google display network ads, you can visit the Google Ads Settings page.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Please note that to the extent advertising technology is integrated into the Services, you may still receive advertisements even if you opt-out. In that case, the advertising will not be tailored to your interests. Also, we do not control any of the above opt-out links or whether any particular company chooses to participate in these opt-out programs. We are not responsible for any choices you make using these mechanisms or the continued availability or accuracy of these mechanisms.
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    Notice Concerning Do-Not-Track Signals
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Do Not Track (“DNT”) is a privacy preference that users can set in certain web browsers. We do not recognize or respond to browser-initiated DNT signals, as the Internet industry is currently still working toward defining exactly what DNT means, what it means to comply with DNT, and a common approach to responding to DNT. To learn more about Do Not Track, you can do so here.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Accessing and Controlling Your Data
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    In order to ensure that the information we maintain is accurate, you may access certain of your information and delete, change, or modify that information in accordance with applicable laws by editing your user profile. You must promptly update your user profile if it changes or is inaccurate. Donors may also be provided with an option of anonymizing certain of their information in connection with a donation, such that the information is not publicly available. Please be advised, however, that Donor information will remain visible to Bangladesh Cancer Aid Trust.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Upon your request, we will close your Donor account and remove your profile information from view as soon as reasonably possible. Please contact Bangladesh Cancer Aid Trust at support@bancat.org.bd to request closure of your user information. Please be advised that we may retain information from closed accounts to comply with the law, prevent fraud, collect any fees owed, resolve disputes, troubleshoot problems, assist with any investigations of any Member or user, enforce our Terms of Use, and/or for any other purposes otherwise permitted by law that we deem necessary in our sole discretion. Once you transmit User Content through the Services, you may not be able to change or remove it.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Consent to Transfer
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    Our computer systems are currently based in Bangladesh so your personal data will be processed by us in the jurisdiction of Peoples’ Republic of Bangladesh. The data protection and privacy regulations in this jurisdiction may not offer the same level of protection as in other parts of the world. By using the Services, you agree to this Policy and you consent to the transfer of all such information to the jurisdiction identified above, which may not offer a level of protection equivalent to that required in the jurisdiction in which you reside, and to the processing of that information as described in this Policy.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Children’s Privacy
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    The Services are intended for general audiences and not for children under the age of 13. If we become aware that we have collected personal information (as defined by the Children’s Online Privacy Protection Act) from children under the age of 13, we will take reasonable steps to delete it as soon as practicable.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Security
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    We have implemented administrative, technical, and physical security measures to protect against the loss, misuse and/or alteration of your information. These safeguards vary based on the sensitivity of the information that we collect and store. However, we cannot and do not guarantee that these measures will prevent every unauthorized attempt to access, use, or disclose your information since despite our efforts, no Internet and/or other electronic transmissions can be completely secure.
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    You may be provided with a password upon creation of your account. We recommend that you immediately change this password and otherwise change your passwords periodically. You are responsible for maintaining the security of your applicable account usernames and passwords. If you believe that your account username and/or password have been stolen or been made known to others, you must contact us immediately at support@bancat.org.bd. We are not responsible if someone else accesses your user information(s) through information that they have obtained from you.
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    Third-Party Links and Services
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    The Services may contain links to or “frame” third-party websites, applications and other services (e.g., including websites related to Campaigns). Please be aware that we are not responsible for the privacy practices of such other sites and services. We encourage our users to be aware when they leave our Services and to read the privacy statements of each and every site they visit that collects their information.
                                </Typography>
                            </>
                        ) : (
                            // Bengali Content
                            <>
                                <Typography variant="body1" paragraph>
                                    এই গোপনীয়তা নীতি (“নীতিমালা”) বাংলাদেশ ক্যান্সার এইড ট্রাস্ট-এর ওয়েবসাইট, পণ্য, টুলস, প্রচারণা এবং এই নীতির আওতাভুক্ত অন্যান্য সেবাসমূহ (একত্রে “সেবাসমূহ”) ব্যবহারের ক্ষেত্রে আপনার তথ্য সংগ্রহ, ব্যবহার এবং শেয়ার করার প্রক্রিয়া বর্ণনা ও নিয়ন্ত্রণ করে। এখানে “বাংলাদেশ ক্যান্সার এইড ট্রাস্ট,” “ব্যানকাট (BANCAT),” “আমরা,” “আমাদের” এবং “আমাদেরকে” বলতে বাংলাদেশ ক্যান্সার এইড ট্রাস্ট-কে বোঝানো হয়েছে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমাদের সেবাসমূহ ব্যবহার করার আগে বা এর মাধ্যমে কোনো তথ্য প্রদানের পূর্বে, অনুগ্রহ করে এই নীতিমালাটি মনোযোগ সহকারে পর্যালোচনা করুন। আপনি যেভাবে বা যে মাধ্যমেই আমাদের সেবা গ্রহণ করুন না কেন, এই সেবা ব্যবহারের মাধ্যমে আপনি এই নীতিমালায় বর্ণিত পদ্ধতিতে আপনার তথ্য সংগ্রহ, ব্যবহার এবং প্রকাশের বিষয়ে সম্মতি প্রদান করছেন। যদি আপনি এই নীতিমালার সাথে একমত না হন, তবে অনুগ্রহ করে আমাদের সেবাসমূহ ব্যবহার করবেন না। আমরা আমাদের সেবার পরিধি ও প্রসারের সাথে সাথে এই নীতিমালা নিয়মিত মূল্যায়ন করব এবং সেই অনুযায়ী এতে পরিবর্তন আনতে পারি। যেকোনো পরিবর্তন এখানে পোস্ট করা হবে এবং আপডেট পেতে আপনার নিয়মিত এই পেজটি চেক করা উচিত। যদি আমরা এই নীতিমালায় কোনো মৌলিক পরিবর্তন আনি, তবে আমরা আইন অনুযায়ী আপনাকে নোটিশ প্রদান করব। আমাদের সেবা ব্যবহার অব্যাহত রাখার মাধ্যমে আপনি হালনাগাদকৃত নীতিমালার শর্তাবলি গ্রহণ করেছেন বলে গণ্য হবে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    এখানে ব্যবহৃত বড় হাতের অক্ষরে লেখা অসংজ্ঞায়িত শব্দগুলোর সংজ্ঞা আমাদের 'ব্যবহারের শর্তাবলী' (Terms of Use)-তে দেওয়া হয়েছে।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    আমরা যে সকল তথ্য সংগ্রহ করি
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা বিভিন্ন উপায়ে তথ্য সংগ্রহ করি, যার মধ্যে রয়েছে আপনার সরাসরি প্রদানকৃত তথ্য এবং আপনার ব্রাউজার বা ডিভাইস থেকে সংগৃহীত পরোক্ষ তথ্য।
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    আপনার সরাসরি প্রদানকৃত তথ্য
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা বিভিন্নভাবে আপনার কাছ থেকে তথ্য সংগ্রহ করতে পারি, যেমন যখন আপনি:
                                </Typography>
                                <ul>
                                    <li>একটি অ্যাকাউন্টের জন্য নিবন্ধন করেন;</li>
                                    <li>আপনার সদস্য প্রোফাইল পূর্ণ করেন;</li>
                                    <li>কোনো প্রচারণায় (Campaign) অনুদান দেন;</li>
                                    <li>একটি প্রচারণা (Campaign) তৈরি করেন;</li>
                                    <li>কোনো জরিপ পূরণ করেন বা আমাদের মতামত (Feedback) প্রদান করেন;</li>
                                    <li>নির্দিষ্ট কোনো ফিচার (যেমন: নিউজলেটার, আপডেট এবং অন্যান্য পণ্য) পেতে অনুরোধ করেন;</li>
                                    <li>এমন কোনো ফিচার ব্যবহার করেন যা সচল করতে আপনার তথ্যের প্রয়োজন (যেমন: আমাদের সেবার সেই অংশগুলো যেখানে অংশগ্রহণের জন্য লগ-ইন প্রয়োজন);</li>
                                    <li>আমাদের সাথে যোগাযোগ করেন; অথবা</li>
                                    <li>আমাদের যেকোনো সেবায় মন্তব্যসহ ব্যবহারকারী কন্টেন্ট (User Content) পোস্ট করেন।</li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    সরাসরি প্রদানকৃত এই তথ্যের মধ্যে অন্তর্ভুক্ত থাকতে পারে (তবে কেবল এর মধ্যেই সীমাবদ্ধ নয়): (১) নাম; (২) ইমেল ঠিকানা; (৩) ডাক ঠিকানা; (৪) ফোন নম্বর; (৫) জন্ম তারিখ; (৬) কর্মস্থলের তথ্য; (৭) ছবি এবং অডিও/ভিডিও কন্টেন্ট; এবং (৮) আপনার পরিচয় যাচাইয়ের জন্য প্রয়োজনীয় আর্থিক তথ্য।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমাদের সেবার মধ্যে ক্যাম্পেইন বোর্ড, চ্যাট রুম, ফোরাম, মেসেজ বোর্ড, নিউজ গ্রুপ এবং অন্যান্য কমিউনিটি টুলস অন্তর্ভুক্ত থাকতে পারে যা অন্য সদস্য এবং ব্যবহারকারীদের কাছে দৃশ্যমান। কমিউনিটিতে আপনার মতামত প্রকাশের সময় অনুগ্রহ করে অন্যদের প্রতি বিবেচনাশীল এবং শ্রদ্ধাশীল থাকুন। আমাদের সেবার এই ধরনের পোস্টিং বা অন্য যেকোনো কন্টেন্ট পর্যালোচনা ও পর্যবেক্ষণ করার এবং অন্য কারো কাছে অনুপযুক্ত বা আপত্তিকর মনে হতে পারে এমন কন্টেন্ট মুছে ফেলার অধিকার আমরা সংরক্ষণ করি, তবে এটি আমাদের জন্য বাধ্যতামূলক নয়।
                                </Typography>


                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    পরোক্ষভাবে বা স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্য
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    ডিভাইস ও ব্যবহার সংক্রান্ত তথ্য
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমাদের সেবা ব্যবহারের জন্য আপনি যে কম্পিউটার বা ডিভাইস (মোবাইল বা ট্যাবলেটসহ) ব্যবহার করেন, সে সম্পর্কে আমরা স্বয়ংক্রিয়ভাবে কিছু তথ্য সংগ্রহ করতে পারি। নিচে বিস্তারিত বর্ণিত পদ্ধতিতে আমরা কিছু তথ্য সংগ্রহ ও বিশ্লেষণ করতে পারি, যেমন: (ক) আইপি (IP) অ্যাড্রেস, জিও-লোকেশন তথ্য, ডিভাইসের অনন্য আইডি (Unique identifier), IMEI এবং TCP/IP অ্যাড্রেস, আপনার কম্পিউটার বা ডিভাইসের অন্যান্য তথ্য, ব্রাউজারের ধরন ও ভাষা, অপারেটিং সিস্টেম, মোবাইল ক্যারিয়ারের তথ্য, এবং আপনি কোন দেশ বা রাজ্য থেকে আমাদের সেবা ব্যবহার করছেন; এবং (খ) আমাদের সেবার সাথে আপনার ইন্টারঅ্যাকশন সংক্রান্ত তথ্য, যেমন: রেফারেল এবং এক্সিট ওয়েব পেজ ও ইউআরএল (URL), প্ল্যাটফর্মের ধরন, ক্লিকের সংখ্যা, ডোমেইন নেম, ল্যান্ডিং পেজ, ভিউ করা পেজ ও কন্টেন্ট এবং সেই পেজগুলোর ক্রম, সেবা ব্যবহারের পরিসংখ্যান, নির্দিষ্ট পেজে কাটানো সময়, ব্যবহারের তারিখ ও সময়, ব্যবহারের ফ্রিকোয়েন্সি, এরর লগ (error logs) এবং অন্যান্য অনুরূপ তথ্য। এই তথ্যগুলো সংগ্রহ করতে আমরা কুকিজ এবং অনুরূপ টুলসহ তৃতীয় পক্ষের অ্যানালিটিক্স প্রোভাইডার ও প্রযুক্তি ব্যবহার করতে পারি।
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    কুকিজ এবং অন্যান্য ইলেকট্রনিক প্রযুক্তি
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা ইন্টারনেট সার্ভার লগ, কুকিজ এবং/অথবা ট্র্যাকিং পিক্সেলের মাধ্যমেও আপনার সাইট ব্যবহারের তথ্য সংগ্রহ করতে পারি। ওয়েব সার্ভার লগ হলো একটি ফাইল যেখানে ওয়েবসাইটের কার্যক্রম সংরক্ষিত থাকে। কুকি হলো একটি ছোট টেক্সট ফাইল যা কোনো ওয়েবসাইট ভিজিট করার সময় আপনার কম্পিউটারে সংরক্ষিত হয়, যা আমাদের সাহায্য করে: (১) আপনার কম্পিউটারকে চিনতে; (২) আপনার পছন্দ ও সেটিংস মনে রাখতে; (৩) আপনি আমাদের কোন পেজগুলো ভিজিট করেছেন তা বুঝতে; (৪) আপনার আগ্রহ অনুযায়ী কন্টেন্ট এবং বিজ্ঞাপন প্রদান করে আপনার অভিজ্ঞতা উন্নত করতে; (৫) সার্চ এবং অ্যানালিটিক্স পরিচালনা করতে; এবং (৬) নিরাপত্তা ও প্রশাসনিক কার্যে সহায়তা করতে। কিছু কুকি আপনার ব্রাউজার ক্যাশে থাকে এবং ফ্ল্যাশ প্রযুক্তির সাথে যুক্ত কুকিগুলো আপনার অ্যাডোবি ফ্ল্যাশ প্লেয়ার ফাইলের সাথে সংরক্ষিত হয়। ট্র্যাকিং পিক্সেল (যাকে মাঝে মাঝে ওয়েব বিকন বা ক্লিয়ার জিআইএফ বলা হয়) হলো ওয়েবসাইট বা ইমেলে থাকা ক্ষুদ্র ইলেকট্রনিক ট্যাগ যা বিজ্ঞাপনের ক্লিক বা ইম্প্রেশন ট্র্যাক করতে এবং ইউজার কুকি অ্যাক্সেস করতে ব্যবহৃত হয়। ইমেল খোলা হয়েছে কিনা তা জানতে এবং অন্যান্য অ্যানালিটিক্স বা পার্সোনালাইজেশনের জন্য আমরা ইমেল ও নিউজলেটারেও ওয়েব বিকন যুক্ত করতে পারি। ভবিষ্যতে নতুন প্রযুক্তি এলে আমরা অন্যান্য পদ্ধতির মাধ্যমেও তথ্য সংগ্রহ করতে পারি।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    অনুগ্রহ করে নোট করুন যে, আপনি আপনার ব্রাউজার সেটিংস পরিবর্তন করে কুকি সেট বা আপডেট হওয়ার সময় নোটিফিকেশন পেতে পারেন অথবা কুকি সম্পূর্ণ ব্লক করতে পারেন। আরও তথ্যের জন্য আপনার ব্রাউজারের (যেমন: Internet Explorer; Google Chrome; Mozilla Firefox; বা Apple Safari) "Help" সেকশন দেখুন। অ্যাডোবি-র ওয়েবসাইটের ফ্ল্যাশ ম্যানেজমেন্ট টুলস ব্যবহার করে আপনি ফ্ল্যাশ কুকিজও নিয়ন্ত্রণ করতে পারেন। তবে কুকি ব্লক করলে আপনি আমাদের সেবার কিছু ফিচার বা সুবিধা থেকে বঞ্চিত হতে পারেন।
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    অবস্থান সংক্রান্ত তথ্য (Location Information)
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা আপনার অবস্থান সম্পর্কে বিভিন্ন ধরনের তথ্য সংগ্রহ করতে পারি, যার মধ্যে রয়েছে সাধারণ তথ্য (যেমন: আইপি অ্যাড্রেস, জিপ কোড) এবং সুনির্দিষ্ট তথ্য (যেমন: মোবাইল ডিভাইসের জিপিএস ভিত্তিক তথ্য)। এই তথ্যের মাধ্যমে আমরা আপনার অবস্থান অনুযায়ী সেবার মান উন্নয়ন করতে পারি (যেমন: আপনার এলাকা ভিত্তিক ক্যাম্পেইন শনাক্ত করা)। কাস্টমাইজড কন্টেন্ট বা বিজ্ঞাপন প্রদানের জন্য আমরা আপনার অবস্থান সংক্রান্ত তথ্য আমাদের এজেন্ট, ভেন্ডর বা বিজ্ঞাপনদাতাদের সাথে শেয়ার করতে পারি। আপনি যদি মোবাইল ডিভাইসের মাধ্যমে আমাদের সেবা ব্যবহার করেন এবং আপনার অবস্থান প্রকাশ করতে না চান, তবে আপনার ডিভাইসের সেটিংস থেকে জিপিএস বা লোকেশন ট্র্যাকিং বন্ধ করে দিতে পারেন। বিস্তারিত জানতে আপনার ডিভাইস প্রস্তুতকারকের নির্দেশনা দেখুন। তবে সুনির্দিষ্ট কিছু ফাংশন বন্ধ করলে আপনি আমাদের সেবার কিছু অংশ ব্যবহার করতে সক্ষম না-ও হতে পারেন।
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    সোশ্যাল নেটওয়ার্কিং সাইট এবং অন্যান্য তৃতীয় পক্ষ থেকে প্রাপ্ত তথ্য
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা আমাদের সহযোগী প্রতিষ্ঠান বা অ-সংযুক্ত তৃতীয় পক্ষের মাধ্যমে আপনার বা অন্যদের তথ্য সংগ্রহ করতে পারি। উদাহরণস্বরূপ, আপনি যদি ফেসবুকের মতো সোশ্যাল মিডিয়া অ্যাকাউন্টের মাধ্যমে আমাদের সেবা ব্যবহার করেন, তবে আপনি আমাদের আপনার প্রোফাইলের নির্দিষ্ট কিছু তথ্য অ্যাক্সেস করার অনুমতি দিচ্ছেন। এর মধ্যে আপনার নাম, প্রোফাইল ছবি, লিঙ্গ, নেটওয়ার্ক, ইউজার আইডি, বন্ধু তালিকা, অবস্থান, জন্ম তারিখ, ইমেল ঠিকানা, ছবি, ভিডিও এবং আপনার পোস্ট বা "লাইক" অন্তর্ভুক্ত থাকতে পারে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    ফেসবুকের মতো সোশ্যাল নেটওয়ার্কিং সাইটগুলোর নিজস্ব গোপনীয়তা নীতি রয়েছে। তারা আপনার তথ্য কীভাবে ব্যবহার বা প্রকাশ করে তা জানতে অনুগ্রহ করে সংশ্লিষ্ট সাইটগুলোর গোপনীয়তা নীতি দেখুন। তৃতীয় পক্ষের সাইটগুলো আপনার সম্পর্কে যে তথ্য সংগ্রহ করে, তার ওপর আমাদের কোনো নিয়ন্ত্রণ নেই।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা অ-সংযুক্ত তৃতীয় পক্ষের মাধ্যমেও তথ্য সংগ্রহ করতে পারি। যেমন, আইনত অনুমোদিত হলে আমরা জালিয়াতি রোধ বা নিরাপত্তার প্রয়োজনে তৃতীয় পক্ষের কাছ থেকে আপনার প্রতিষ্ঠানের ইতিহাস বা পরিচয় যাচাইয়ের তথ্য সংগ্রহ করতে পারি। আপনার কাছ থেকে প্রাপ্ত তথ্যের সাথে আমরা এই তৃতীয় পক্ষ থেকে প্রাপ্ত তথ্যের সমন্বয় করতে পারি।
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    ব্যক্তিগত ডিভাইসের তথ্য সংগ্রহ
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    কখনও কখনও আমরা (বা আমাদের সেবাদানকারীরা) সংগৃহীত তথ্য—যেমন লগ-ইন ক্রেডেনশিয়াল, আইপি অ্যাড্রেস বা ডিভাইসের অনন্য আইডি—ব্যবহার করে বিভিন্ন ব্রাউজার বা ডিভাইসে (যেমন স্মার্টফোন, ট্যাবলেট বা কম্পিউটার) একই ব্যবহারকারীকে শনাক্ত করার চেষ্টা করি। এটি করা হয় আপনাকে আরও উন্নত কন্টেন্ট, বিজ্ঞাপন এবং সব ডিভাইসে একটি নিরবচ্ছিন্ন অভিজ্ঞতা প্রদানের উদ্দেশ্যে।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    আমরা কীভাবে আপনার তথ্য ব্যবহার করি
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা আপনার কাছ থেকে সংগৃহীত তথ্য নিচের উদ্দেশ্যে ব্যবহার করতে পারি:
                                </Typography>
                                <ul>
                                    <li>যে উদ্দেশ্যে তথ্যটি প্রদান করা হয়েছে তা সফল করতে;</li>
                                    <li>আপনাকে শনাক্ত করতে এবং লগ-ইন প্রক্রিয়া সম্পন্ন করতে;</li>
                                    <li>আমাদের ফিচার, সেবা এবং পণ্যগুলো চালু করতে বা প্রদান করতে;</li>
                                    <li>আপনার সাথে আমাদের সম্পর্ক বা লেনদেন সংক্রান্ত তথ্য, অ্যাকাউন্ট অ্যালার্ট বা আপনার সাবস্ক্রাইব করা নিউজলেটার পাঠাতে;</li>
                                    <li>আমাদের বা তৃতীয় পক্ষের কোনো পণ্য, জরিপ বা ক্যাম্পেইন যা আপনার জন্য গুরুত্বপূর্ণ হতে পারে তা জানাতে আপনার সাথে যোগাযোগ করতে;</li>
                                    <li>আপনার জিজ্ঞাসার জবাব দিতে বা মতামত (Feedback) গ্রহণ করতে;</li>
                                    <li>অভ্যন্তরীণ গবেষণা এবং রিপোর্টিংয়ের জন্য;</li>
                                    <li>সেবার কন্টেন্ট ও ফিচার উন্নত করতে বা নতুন সেবা তৈরি করতে;</li>
                                    <li>আমাদের বা অন্য সাইটে আপনার দেখা কন্টেন্ট এবং বিজ্ঞাপনগুলো আপনার পছন্দ অনুযায়ী সাজাতে;</li>
                                    <li>অভ্যন্তরীণ নিয়োগের (recruiting) প্রয়োজনে;</li>
                                    <li>আপনার সম্মতিক্রমে, আমাদের সম্পর্ক বা আপনার আগ্রহের কোনো সেবা সম্পর্কে কল বা এসএমএস পাঠাতে;</li>
                                    <li>আমাদের সেবার ব্যবহারের ক্ষেত্রে প্রযোজ্য আইনি শর্তাবলী কার্যকর করতে; এবং</li>
                                    <li>সেবার কারিগরি সমস্যা সমাধান ও পরিচালনা করতে।</li>
                                </ul>
                                <Typography variant="body1" paragraph>
                                    নোট করুন যে, আপনার কাছ থেকে প্রাপ্ত তথ্য এবং স্বয়ংক্রিয়ভাবে সংগৃহীত তথ্যের সাথে আমরা আমাদের সহযোগী বা তৃতীয় পক্ষের কাছ থেকে প্রাপ্ত তথ্যের সমন্বয় করতে পারি এবং এই নীতি অনুযায়ী তা ব্যবহার করতে পারি। আমরা সংগৃহীত তথ্যগুলো একত্রিত (Aggregate) বা পরিচয়হীন (De-identify) করতে পারি। এই পরিচয়হীন বা একত্রিত ডেটা আমরা গবেষণা, মার্কেটিং বা বিজ্ঞাপনদাতাদের সাথে শেয়ার করাসহ যেকোনো উদ্দেশ্যে ব্যবহার করতে পারি।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    কখন আমরা আপনার তথ্য প্রকাশ করি
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা নিচের পরিস্থিতিতে আপনার তথ্য অ-সংযুক্ত তৃতীয় পক্ষের কাছে প্রকাশ বা শেয়ার করতে পারি:
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>সম্মতি:</strong> আপনার স্পষ্ট সম্মতির ভিত্তিতে আমরা যেকোনো তৃতীয় পক্ষকে তথ্য দিতে পারি।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>সেবা প্রদানকারী:</strong> আমাদের পক্ষ থেকে যারা মার্কেটিং, মার্কেট রিসার্চ, কাস্টমার সাপোর্ট, ডেটা স্টোরেজ, বিশ্লেষণ বা আইনি সেবা প্রদান করে, তাদের সাথে আমরা তথ্য শেয়ার করতে পারি।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>ব্যানকাট এবং অন্যদের সুরক্ষা:</strong> আপনি সম্মত হচ্ছেন যে, আইনি প্রয়োজনে বা ব্যানকাটের গোপনীয়তা নীতি অনুযায়ী প্রয়োজনীয় মনে করলে আমরা আপনার তথ্য বা ইউজার কন্টেন্ট সংরক্ষণ ও প্রকাশ করতে পারি: (১) আইনি প্রক্রিয়া পালনের জন্য; (২) আমাদের শর্তাবলী বা চুক্তি কার্যকর করার জন্য; (৩) কোনো কন্টেন্ট তৃতীয় পক্ষের অধিকার লঙ্ঘন করেছে এমন দাবির জবাব দিতে; (৪) কাস্টমার সার্ভিসের অনুরোধে; এবং/অথবা (৫) ব্যানকাট, এর এজেন্ট, ব্যবহারকারী এবং জনসাধারণের অধিকার, সম্পত্তি বা ব্যক্তিগত নিরাপত্তা রক্ষায়। এর মধ্যে জালিয়াতি বা ম্যালওয়্যার প্রতিরোধের উদ্দেশ্যে অন্যান্য সংস্থা ও সংগঠনের সাথে তথ্য বিনিময় অন্তর্ভুক্ত।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>ব্যবসায়িক হস্তান্তর:</strong> আমাদের ব্যবসার উন্নয়ন প্রক্রিয়ায় আমরা অন্য কোনো কোম্পানির সাথে একীভূত হতে পারি বা অংশীদার হতে পারি। এই ধরনের লেনদেনে ব্যবহারকারীর তথ্য হস্তান্তরিত সম্পদের অন্তর্ভুক্ত হতে পারে। যদি ব্যানকাট-এর সম্পদ বিক্রি বা হস্তান্তরিত হয়, তবে গ্রাহকের তথ্য (ইমেলসহ) হস্তান্তরিত সম্পদের অংশ হওয়ার সম্ভাবনা রয়েছে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    <strong>ক্যাম্পেইন এবং পাবলিক ফোরাম:</strong> আমাদের সেবার ক্যাম্পেইনগুলো সবার জন্য উন্মুক্ত হতে পারে। আপনি এই পাবলিক ফোরামে যে তথ্য দেবেন তা অন্য যে কেউ পড়তে, সংগ্রহ বা ব্যবহার করতে পারে। মনে রাখবেন, সার্চ ইঞ্জিনগুলো এই তথ্য ইনডেক্স করতে পারে। তাই জনসমক্ষে কী প্রকাশ করছেন সে বিষয়ে সতর্ক থাকার জন্য আমরা অনুরোধ করছি।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    অনলাইন এবং বিজ্ঞাপন অ্যানালিটিক্স
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    অ্যানালিটিক্স (Analytics)
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা আমাদের সেবায় তৃতীয় পক্ষের ওয়েব অ্যানালিটিক্স সার্ভিস (যেমন: Google Analytics) ব্যবহার করতে পারি। অ্যানালিটিক্স প্রযুক্তির মাধ্যমে সংগৃহীত তথ্য সরাসরি এই সেবাদানকারীদের কাছে যাবে যারা সাইটের ব্যবহারবিধি বিশ্লেষণ ও জালিয়াতি রোধে আমাদের সহায়তা করে। গুগল অ্যানালিটিক্স থেকে আপনার তথ্য রক্ষা করতে আপনি [এখানে ক্লিক করে] 'গুগল অ্যানালিটিক্স অপ্ট-আউট ব্রাউজার অ্যাড-অন' ইনস্টল করতে পারেন। আমরা অ্যাডোবি অ্যানালিটিক্সও ব্যবহার করতে পারি।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা আমাদের ইমেলের কার্যকারিতা মাপার জন্য অ্যানালিটিক্স টুল (যেমন: clear GIFs) ব্যবহার করতে পারি যা আমাদের জানায় আপনি ইমেলটি খুলেছেন কি না বা কোনো লিঙ্কে ক্লিক করেছেন কি না।
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    অনলাইন বিজ্ঞাপন
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা তৃতীয় পক্ষের বিজ্ঞাপন প্রযুক্তি ব্যবহার করতে পারি যা আমাদের সাইটে এবং আপনি ভিজিট করেন এমন অন্যান্য সাইটে প্রাসঙ্গিক বিজ্ঞাপন দেখাতে সাহায্য করে। আমরা গুগল এবং ফেসবুকের মতো পার্টনারদের সাথে কাজ করি যারা আপনার ব্রাউজারে কুকি সেট করতে পারে। এই বিজ্ঞাপনগুলো আপনার বয়স, লিঙ্গ, সার্চ হিস্ট্রি এবং আমাদের সংগৃহীত তথ্যের ওপর ভিত্তি করে তৈরি হতে পারে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমরা তৃতীয় পক্ষকে (যেমন: বিজ্ঞাপন নেটওয়ার্ক) আপনার কম্পিউটার বা মোবাইলে কুকি বা ট্র্যাকিং প্রযুক্তি ব্যবহার করে কাস্টমাইজড বিজ্ঞাপন দেখানোর অনুমতি দিতে পারি। আমরা জেনেশুনে পরিচয়হীন ফর্মে আপনার ইমেল অ্যাড্রেস সেবাদানকারীদের দিতে পারি যাতে তারা আপনাকে নির্দিষ্ট বিজ্ঞাপন দিয়ে "রিটার্গেট" করতে পারে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    তৃতীয় পক্ষের এই প্রযুক্তির ওপর আমাদের কোনো নিয়ন্ত্রণ নেই এবং এটি আমাদের এই নীতিমালার আওতাভুক্ত নয়। আপনি চাইলে Network Advertising Initiative বা Digital Advertising Alliance-এর অপ্ট-আউট লিঙ্কের মাধ্যমে এই ধরনের বিজ্ঞাপন গ্রহণ থেকে নিজেকে সরিয়ে নিতে পারেন। গুগল বিজ্ঞাপনের ক্ষেত্রে আপনি Google Ads Settings পেজ ভিজিট করতে পারেন। মনে রাখবেন, অপ্ট-আউট করার পরেও আপনি বিজ্ঞাপন দেখতে পারেন, তবে সেগুলো আপনার পছন্দ অনুযায়ী হবে না।
                                </Typography>

                                <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 3 }}>
                                    ডু-নট-ট্র্যাক (Do-Not-Track) সিগন্যাল সংক্রান্ত বিজ্ঞপ্তি
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    ডু-নট-ট্র্যাক (“DNT”) হলো ব্রাউজারের একটি গোপনীয়তা সেটিং। আমরা বর্তমানে ব্রাউজার থেকে আসা DNT সিগন্যালে সাড়া দিই না, কারণ ইন্টারনেট ইন্ডাস্ট্রি এখনও এর সুনির্দিষ্ট সংজ্ঞা এবং পালনের অভিন্ন পদ্ধতি নিয়ে কাজ করছে।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    আপনার ডেটা অ্যাক্সেস এবং নিয়ন্ত্রণ
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আপনার তথ্য সঠিক রাখতে আপনি আপনার প্রোফাইল এডিট করে তথ্য ডিলিট বা সংশোধন করতে পারেন। তথ্য ভুল হলে বা পরিবর্তিত হলে দ্রুত আপডেট করা আপনার দায়িত্ব। দাতাদের ক্ষেত্রে তাদের তথ্য পরিচয়হীন (anonymizing) করার সুযোগ থাকতে পারে যাতে তা জনসমক্ষে না আসে, তবে ব্যানকাট-এর কাছে এই তথ্য দৃশ্যমান থাকবে।
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আপনার অনুরোধে আমরা যত দ্রুত সম্ভব আপনার অ্যাকাউন্ট বন্ধ করে দেব এবং প্রোফাইল তথ্য সরিয়ে ফেলব। অ্যাকাউন্ট বন্ধের জন্য অনুগ্রহ করে support@bancat.org.bd ঠিকানায় যোগাযোগ করুন। তবে জালিয়াতি রোধ, আইন পালন, বকেয়া ফি আদায়, বিরোধ নিষ্পত্তি বা তদন্তের স্বার্থে আমরা বন্ধ অ্যাকাউন্টের তথ্য সংরক্ষণ করতে পারি। একবার কোনো ইউজার কন্টেন্ট পাঠিয়ে দিলে তা আর পরিবর্তন বা অপসারণ করা সম্ভব না-ও হতে পারে।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    তথ্য হস্তান্তরে সম্মতি (Consent to Transfer)
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমাদের কম্পিউটার সিস্টেম বর্তমানে বাংলাদেশে অবস্থিত, তাই আপনার ব্যক্তিগত তথ্য গণপ্রজাতন্ত্রী বাংলাদেশের আইন অনুযায়ী আমাদের দ্বারা প্রক্রিয়াজাত করা হবে। এই অঞ্চলের ডেটা প্রোটেকশন আইন বিশ্বের অন্য প্রান্তের মতো একই রকম না-ও হতে পারে। আমাদের সেবা ব্যবহারের মাধ্যমে আপনি এই নীতিতে এবং বাংলাদেশে তথ্য হস্তান্তরের বিষয়ে সম্মতি দিচ্ছেন।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    শিশুদের গোপনীয়তা
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমাদের সেবাসমূহ সাধারণ দর্শকদের জন্য এবং ১৩ বছরের কম বয়সী শিশুদের জন্য নয়। আমরা যদি জানতে পারি যে ১৩ বছরের কম বয়সী কোনো শিশুর ব্যক্তিগত তথ্য আমাদের কাছে জমা হয়েছে, তবে আমরা তা মুছে ফেলার জন্য প্রয়োজনীয় পদক্ষেপ নেব।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    নিরাপত্তা
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আপনার তথ্যের অপব্যবহার বা পরিবর্তন রোধে আমরা প্রশাসনিক, প্রযুক্তিগত এবং শারীরিক নিরাপত্তা ব্যবস্থা গ্রহণ করেছি। তবে আমরা গ্যারান্টি দিতে পারি না যে এই ব্যবস্থাগুলো সব ধরনের অননুমোদিত চেষ্টা রুখে দেবে, কারণ ইন্টারনেটে কোনো আদান-প্রদানই সম্পূর্ণ নিরাপদ নয়। অ্যাকাউন্ট খোলার সময় আপনাকে একটি পাসওয়ার্ড দেওয়া হতে পারে; আমরা সুপারিশ করি যে আপনি অবিলম্বে তা পরিবর্তন করুন এবং নিয়মিত বিরতিতে পাসওয়ার্ড বদলান। আপনার ইউজারনেম ও পাসওয়ার্ডের নিরাপত্তার দায়িত্ব আপনার। যদি মনে হয় পাসওয়ার্ড চুরি হয়েছে, তবে দ্রুত support@bancat.org.bd এ আমাদের জানান।
                                </Typography>

                                <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ mt: 4 }}>
                                    তৃতীয় পক্ষের লিঙ্ক এবং সেবাসমূহ
                                </Typography>
                                <Typography variant="body1" paragraph>
                                    আমাদের সেবায় তৃতীয় পক্ষের ওয়েবসাইটের লিঙ্ক থাকতে পারে। সেই সব সাইটের গোপনীয়তা নীতির জন্য আমরা দায়ী নই। আমাদের সাইট ছেড়ে অন্য সাইটে যাওয়ার সময় আমরা আপনাকে সেই সাইটের গোপনীয়তা নীতি পড়ে নেওয়ার পরামর্শ দিই।
                                </Typography>
                            </>
                        )}

                        <Box mt={4} display="flex" flexDirection="column" alignItems="center" bgcolor="#f5f5f5" p={4} borderRadius={2}>
                            <Typography variant="h6" fontWeight="bold" gutterBottom>
                                {i18n.language === 'en' ? 'Questions About this Policy' : 'এই নীতিমালা সংক্রান্ত প্রশ্ন'}
                            </Typography>
                            <Typography variant="body1">
                                {i18n.language === 'en'
                                    ? 'If you have any questions about our Policy, you can contact us by emailing us:'
                                    : 'আমাদের নীতিমালা সম্পর্কে কোনো প্রশ্ন থাকলে অনুগ্রহ করে আমাদের ইমেল করুন:'}
                            </Typography>
                            <Typography variant="h5" color="primary" fontWeight="bold" sx={{ mt: 1 }}>
                                <a href="mailto:support@bancat.org.bd" style={{ textDecoration: 'none', color: 'inherit' }}>support@bancat.org.bd</a>
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
