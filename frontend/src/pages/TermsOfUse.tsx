import { Container, Typography, Box, Paper, Alert, AlertTitle } from '@mui/material';
import { SEOHead } from '../components/common/SEOHead';

export const TermsOfUse = () => {
    return (
        <>
            <SEOHead />
            <Box sx={{ py: 8, bgcolor: 'background.default', minHeight: '80vh' }}>
                <Container maxWidth="lg">
                    <Box mb={6} textAlign="center">
                        <Typography variant="h3" component="h1" fontWeight="bold" color="primary" gutterBottom>
                            Terms of Use
                        </Typography>
                    </Box>

                    <Paper sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
                        <Alert severity="warning" sx={{ mb: 4 }}>
                            <AlertTitle>IMPORTANT NOTICE</AlertTitle>
                            THIS AGREEMENT CONTAINS A BINDING ARBITRATION PROVISION AND CLASS ACTION WAIVER. IT AFFECTS YOUR LEGAL RIGHTS AS DETAILED IN THE ARBITRATION AND CLASS ACTION WAIVER SECTION BELOW. PLEASE READ CAREFULLY.
                        </Alert>

                        <Typography variant="body1" paragraph>
                            Thank you for visiting Bangladesh Cancer Aid Trust. Bangladesh Cancer Aid Trust is a non-profit organization working towards eliminating cancer as a major health problem by prevention and diminishing suffering through education, advocacy and service. Our major work is providing financial support to the cancer patients from the underserved communities and spread nationwide cancer awareness.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            These Terms of Use (“Terms”) govern your access to, use of, and participation in the services made available by Bangladesh Cancer Aid Trust. (“Bangladesh Cancer Aid Trust,” “BANCAT”, “we,” “our,” or “us”), including our websites, products, tools, promotions, and any other services that reference these Terms (collectively, the “Services”). By accessing or otherwise using the Services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use the Services.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            All references to “you” or “your,” as applicable, mean the person who accesses, uses, and/or participates in the Services in any manner, and each of your heirs, assigns, and successors. If you use the Services on behalf of an entity, you represent and warrant that you have the authority to bind that entity, your acceptance of the Terms will be deemed an acceptance by that entity, and “you” and “your” herein shall refer to that entity.
                        </Typography>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Definitions
                            </Typography>
                            <Typography variant="body1" component="div">
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li><strong>“Campaign”</strong> means a cause, goal, or event for which BANCAT seeks donations through the Services.</li>
                                    <li><strong>“Donor”</strong> means an individual or organization who donates to a Campaign.</li>
                                    <li><strong>“Members”</strong> means Donors and other users of the Services.</li>
                                </ul>
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Eligibility
                            </Typography>
                            <Typography variant="body1" paragraph>
                                To use the Services you must be, and represent and warrant that you are, of legal age (18 years of age or older or otherwise of legal age in your jurisdiction, or, if you have parental consent, 13 years of age) and competent to agree to these Terms. If Bangladesh Cancer Aid Trust has previously prohibited you from accessing or using the Services, you are not permitted to access or use the Services.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Additional Terms and Policies
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Please review our Privacy Policy, incorporated herein by reference, for information and notices concerning our collection and use of your information. Certain areas of and/or products on the Services may have different terms and conditions posted or may require you to agree with and accept additional terms and conditions or policies. If there is a conflict between these Services and the terms and conditions or policies posted for a specific area or product, the latter take precedence with respect to your use of that area or product.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Modifications
                            </Typography>
                            <Typography variant="body1" paragraph>
                                We may, from time to time, modify these Terms. Please check this page periodically for updates. Any changes will be posted on the Services. If you do not agree to, or cannot comply with, the modified Terms, you must stop using the Services. The updated Terms will take effect after their posting and will apply on a going-forward basis, unless otherwise provided in a notice to you, and except as provided in the Arbitration and Class Action Waiver section of these Terms. Your continued use of the Services after any such update constitutes your binding acceptance of such changes.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Donor Information
                            </Typography>
                            <Typography variant="body1" paragraph>
                                You are required and agreed upon to provide us with accurate, complete, and current information about yourself. By registering, you agree that you are fully responsible for all activities that occur under your user name. We may assume that any communications we receive under your account have been made by you.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                You are responsible for notifying us at <a href="mailto:support@bancat.org.bd">support@bancat.org.bd</a> if you become aware of any unauthorized use of your information. You understand and agree that we may require you to provide information that may be used to confirm your identity and help ensure the security of your account. Bangladesh Cancer Aid Trust will not be liable for any loss, damages, liability, expenses or attorneys’ fees that you may incur as a result of someone else using your password or account, either with or without your knowledge and/or authorization, and regardless of whether you have or have not advised us of such unauthorized use. You will be liable for losses, damages, liability, expenses and attorneys’ fees incurred by Bangladesh Cancer Aid Trust or a third party due to someone else using your information.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Intellectual Property and Other Proprietary Rights
                            </Typography>
                            <Typography variant="body1" paragraph>
                                The Services are owned and operated by Bangladesh Cancer Aid Trust and contain materials (including all software, design, text, editorial materials, informational text, photographs, illustrations, audio clips, video clips, artwork and other graphic materials, and names, logos, trademarks and services marks) which are derived in whole or in part from materials supplied by Bangladesh Cancer Aid Trust and its partners, as well as other sources, and is protected by Peoples’ Republic of Bangladesh copyright laws, trademarks, service marks and other intellectual property laws. You agree to abide by all applicable copyright and other laws, as well as any additional copyright notices or restrictions contained in the Services. You acknowledge that the Services have been developed, compiled, prepared, revised, selected, and arranged by Bangladesh Cancer Aid Trust and others through the application of methods and standards of judgment developed and applied through the expenditure of substantial time, effort, and money and constitute valuable intellectual property of Bangladesh Cancer Aid Trust and such others. You agree to protect the proprietary rights of Bangladesh Cancer Aid Trust and all others having rights in the Services during and after the term of these Terms and to comply with all reasonable written requests made by Bangladesh Cancer Aid Trust or its partners and licensors of content or otherwise to protect their and others’ contractual, statutory, and common law rights in the Services. You agree to notify Bangladesh Cancer Aid Trust immediately upon becoming aware of any claim that the Services infringe upon any copyright, trademark, or other contractual, statutory, or common law rights. All present and future rights in and to trade secrets, patents, copyrights, trademarks, service marks, know-how, and other proprietary rights of any type under the laws of any governmental authority, domestic or foreign, including without limitation rights in and to all applications and registrations relating to the Services shall, as between you and Bangladesh Cancer Aid Trust, at all times be and remain the sole and exclusive property of Bangladesh Cancer Aid Trust.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                License
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Subject to your compliance with these Terms, we grant you a limited, non-exclusive, non-sub licensable, non-transferable, and revocable right to access and use the Services only for your own use, and only in a manner that complies with all legal requirements that apply to you or your use of the Services. Bangladesh Cancer Aid Trust may revoke this license at any time, in its sole discretion.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Prohibited Uses
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Use of the Services for any illegal purpose, or any other purpose not expressly permitted in these Terms, is strictly prohibited. Without limitation, you will not:
                            </Typography>
                            <Typography variant="body2" component="div">
                                <ul style={{ paddingLeft: '20px' }}>
                                    <li>Copy, download (other than through page caching necessary for personal use, or as otherwise expressly permitted by these Terms), modify, distribute, post, transmit, display, perform, reproduce, broadcast, duplicate, publish, republish, upload, license, reverse engineer, or create derivative works from any content or other information contained on or obtained from or through the Services, by any means except as provided for in these Terms or expressly provided by Bangladesh Cancer Aid Trust;</li>
                                    <li>Scrape, access, monitor, index, frame, link, or copy any content or information on the Services by accessing the Services in an automated way, using any robot, spider, scraper, web crawler, or any other method of access other than manually accessing the publicly-available portions of the Services through a browser;</li>
                                    <li>Violate the restrictions in any robot exclusion headers of the Services, if any, or bypass or circumvent other measures employed to prevent or limit access to the Services;</li>
                                    <li>Falsely state or otherwise misrepresent your affiliation with a person or entity, or impersonate any person or entity in a manner that does not constitute parody;</li>
                                    <li>Solicit personal or sensitive information from other users for purposes not permitted by these Terms;</li>
                                    <li>Send spam or other advertisements or solicitations, surveys, contents, pyramid schemes, promote commercial entities, or otherwise engage in commercial activity on or through the Services;</li>
                                    <li>Frame, inline link, or similarly display the Services or any portion of the Services; or</li>
                                    <li>Interfere with any other party’s use and enjoyment of the Services.</li>
                                </ul>
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ mt: 2 }}>
                                Without limiting the foregoing, Bangladesh Cancer Aid Trust represent and warrant that (1) all information provided in connection with a Campaign is accurate, complete, and not otherwise designed to mislead, defraud, or deceive any Member or other user; (2) all donations contributed to a Campaign will be used solely as described in the Campaign.
                            </Typography>
                            <Typography variant="body1" paragraph fontWeight="bold">
                                DONORS ARE SOLELY RESPONSIBLE FOR ASSESSING THE VALUE AND APPROPRIATENESS OF CONTRIBUTING TO ANY CAMPAIGN. WE ENCOURAGE DONORS TO USE THEIR DISCRETION WHEN SUPPORTING CAMPAIGNS.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                User Disputes
                            </Typography>
                            <Typography variant="body1" paragraph>
                                You agree that you are solely responsible for your interactions with any other user in connection with the Services and Bangladesh Cancer Aid Trust will have no liability or responsibility with respect thereto. Bangladesh Cancer Aid Trust reserves the right, but has no obligation, to become involved in any way with disputes between you and any other user of the Services and any third party relating to the use of the Services.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Payments
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Payment processing services for campaign on Bangladesh Cancer Aid Trust are provided and verified by FOSTERPAYMENTS and are subject to the Stripe Connected Account Agreement, which includes the Stripe Services Agreement. Where applicable, FOSTERPAYMENTS may facilitate money transmission services. By agreeing to these Terms, you agree to be bound by the Stripe Connected Account Agreement and Stripe Services Agreement, as the same may be modified by FOSTERPAYMENTS from time to time. As a condition of Bangladesh Cancer Aid Trust enabling payment processing services through FOSTERPAYMENTS, you agree to provide us accurate and complete information about you and any applicable Campaigns, and you authorize Bangladesh Cancer Aid Trust to share with FOSTERPAYMENTS this information and transaction information related to your use of the payment processing services provided by FOSTERPAYMENTS. Bangladesh Cancer Aid Trust is not responsible for the performance of FOSTERPAYMENTS.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                In some instances, Bangladesh Cancer Aid Trust may held/launch Campaigns without using FOSTERPAYMENTS. In such instances, Bangladesh Cancer Aid Trust will hold donations in a dedicated bank account or mobile banking medium, and funds from donations shall be transmitted to the Campaigns through bank transfer, or other legal means.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Legal Compliance
                            </Typography>
                            <Typography variant="body1" paragraph>
                                You acknowledge, consent, and agree that Bangladesh Cancer Aid Trust may access, preserve, and disclose your information and/or any User Content you submit or make available for inclusion on the Services, if required to do so by law or in a good faith belief that such access, preservation, or disclosure is permitted by Bangladesh Cancer Aid Trust’s Privacy Policy or reasonably necessary or appropriate for any of the following reasons: (1) to comply with legal process; (2) to enforce these Terms, our Privacy Policy, or other contracts with you, including investigation of potential violations thereof; (3) to respond to claims that any content violates the rights of third parties; (4) to respond to your requests for customer service; and/or (5) to protect the rights, property, or personal safety of Bangladesh Cancer Aid Trust, its agents and affiliates, its users, and the public. This includes exchanging information with other companies and organizations for fraud protection, and spam/malware prevention, and similar purposes.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Warranties and Disclaimers
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                THE SERVICES AND ITS CONTENTS, WHETHER PROVIDED BY BANGLADESH CANCER AID TRUST, ITS LICENSORS, ITS PARTNERS OR ITS USERS, AND OTHER INFORMATION ON OR ACCESSIBLE FROM THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTY, REPRESENTATION, CONDITION, OR GUARANTEE OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY IMPLIED WARRANTIES, REPRESENTATIONS, CONDITIONS OR GUARANTEES OF QUALITY, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT, ALL OF WHICH ARE DISCLAIMED TO THE FULLEST EXTENT PERMITTED BY LAW. SPECIFICALLY, BUT WITHOUT LIMITATION, BANGLADESH CANCER AID TRUST DOES NOT WARRANT THAT: (i) THE INFORMATION AVAILABLE ON THE SERVICES IS FREE OF ERRORS; (ii) DEFECTS WILL BE CORRECTED, OR (iii) THE SERVICES OR THE SERVER(S) THAT MAKE THE SERVICES AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                IN NO EVENT SHALL BANGLADESH CANCER AID TRUST OR ITS AFFILIATES, LICENSORS, VENDORS, OR ANY OF THEIR RESPECTIVE DIRECTORS, OFFICERS, EMPLOYEES, AGENTS, OR OTHER REPRESENTATIVES BE LIABLE TO YOU OR ANY OTHER PERSON OR ENTITY FOR ANY DAMAGES, WHETHER DIRECT, INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, PUNITIVE OR OTHERWISE (INCLUDING, BUT NOT LIMITED TO, DAMAGES FOR LOSS OF PROFITS, LOSS OF DATA, LOSS OF USE, OR COSTS OF OBTAINING SUBSTITUTE GOODS OR SERVICES), ARISING OUT OF OR IN CONNECTION WITH THE SERVICES, ANY MATERIALS, INFORMATION, OR RECOMMENDATIONS APPEARING ON THE SERVICES, OR ANY LINK PROVIDED ON THE SERVICES, WHETHER OR NOT BANGLADESH CANCER AID TRUST HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND WHETHER BASED UPON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, VIOLATION OF STATUTE, OR OTHERWISE. THIS EXCLUSION OF LIABILITY SHALL APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. IN ANY EVENT, OUR AGGREGATE LIABILITY WILL NOT EXCEED THE AMOUNT YOU DONATED TO THE CAMPAIGN TO WHICH THE CLAIM RELATES OR, IF THE CLAIM DOES NOT RELATE TO A DONATION FOR A CAMPAIGN.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Indemnification
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ textTransform: 'uppercase', fontSize: '0.85rem' }}>
                                YOU AGREE TO INDEMNIFY, DEFEND, AND HOLD BANGLADESH CANCER AID TRUST AND ITS RESPECTIVE OFFICERS, DIRECTORS, EMPLOYEES, MEMBERS, SHAREHOLDERS, OR REPRESENTATIVES (AND ALL SUCCESSORS AND ASSIGNS OF ANY OF THE FOREGOING), HARMLESS FROM AND AGAINST ANY CLAIM OR DEMAND, INCLUDING WITHOUT LIMITATION, REASONABLE ATTORNEYS' FEES AND DISBURSEMENTS, MADE BY ANY THIRD PARTY IN CONNECTION WITH OR ARISING OUT OF YOUR VIOLATION OF THE TERMS OR BANGLADESH CANCER AID TRUST PRIVACY POLICY, YOUR VIOLATION OF AN APPLICABLE LAW, AND/OR YOUR VIOLATION OF ANY RIGHTS OF ANOTHER. WE RESERVE THE RIGHT, AT OUR OWN EXPENSE, TO ASSUME THE EXCLUSIVE DEFENSE AND CONTROL OF SUCH DISPUTES, AND IN ANY EVENT YOU WILL COOPERATE WITH US IN ASSERTING ANY AVAILABLE DEFENSES.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Third-Party Links and Services
                            </Typography>
                            <Typography variant="body1" paragraph>
                                The Services may provide (1) information and content provided by third parties; and (2) links to third-party websites or resources. Bangladesh Cancer Aid Trust is not responsible for the availability of such external sites or resources, and does not endorse and is not responsible or liable for (i) any content or other materials on or available from such sites or resources, (ii) any errors or omissions in these websites or resources, or (iii) any information handling practices or other business practices of the operators of such sites or resources. You further acknowledge and agree that Bangladesh Cancer Aid Trust shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any linked sites or resources. Your interactions with such third parties will be governed by the third parties’ own terms of service and privacy policies, and any other similar terms.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Modification and Termination of the Services
                            </Typography>

                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
                                Modification of Services
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Bangladesh Cancer Aid Trust reserves the right at any time to modify or discontinue, temporarily or permanently, the Services (or any part thereof), with or without notice. You agree that Bangladesh Cancer Aid Trust shall not be liable to you or any third party for any modification, suspension or discontinuance of the Services.
                            </Typography>

                            <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ mt: 2 }}>
                                Termination
                            </Typography>
                            <Typography variant="body1" paragraph>
                                These Terms are effective unless and until terminated by you or us. We may, in our sole and absolute discretion, deny you access to all or part of the Services at any time for any or no reason at all, with or without notice to you. If we terminate your right to access the Services, these Terms will terminate and all rights you have to access the Services will immediately terminate, provided that any donations made prior to the effective date of termination will continue to be processed in accordance with these Terms. All provisions of the Terms which by their nature should survive, shall survive termination of services.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Arbitration and Class Action Waiver
                            </Typography>
                            <Typography variant="body1" paragraph fontWeight="bold">
                                PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS, INCLUDING YOUR RIGHT TO FILE A LAWSUIT IN COURT.
                            </Typography>
                            <Typography variant="subtitle1" fontWeight="bold" gutterBottom>Application</Typography>
                            <Typography variant="body1" paragraph>
                                You and Bangladesh Cancer Aid Trust agree that these Terms affect interstate commerce and that the Peoples’ Republic of Bangladesh Law governs the interpretation and enforcement of these arbitration provisions. This is intended to be interpreted broadly and governs any and all disputes between us.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <em>(Please refer to full legal documentation for detailed dispute resolution procedures, initial dispute resolution steps, and binding arbitration clauses administered by Peoples’ Republic of Bangladesh Judiciary system.)</em>
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                General Terms
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Force Majeure:</strong> Under no circumstances shall Bangladesh Cancer Aid Trust be held liable for any delay or failure in performance resulting directly or indirectly from an event beyond its reasonable control.
                            </Typography>
                            <Typography variant="body1" paragraph>
                                <strong>Governing Law:</strong> These Terms shall be construed in accordance with and governed by the laws of the Peoples’ Republic of Bangladesh notwithstanding its conflicts of law principles.
                            </Typography>
                        </Box>

                        <Box sx={{ mt: 4 }}>
                            <Typography variant="h5" fontWeight="bold" gutterBottom>
                                Contact Us
                            </Typography>
                            <Typography variant="body1" paragraph>
                                If you have any questions about these Terms, please contact us by email at <a href="mailto:support@bancat.org.bd">support@bancat.org.bd</a>.
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Bangladesh Cancer Aid Trust<br />
                                House: 15, Flat: C-3, Road: 36, Block: CWN (B), Gulshan: 2, Dhaka: 1212
                            </Typography>
                        </Box>
                    </Paper>
                </Container>
            </Box>
        </>
    );
};
