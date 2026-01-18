import { Box, Container, Typography, Modal, IconButton } from '@mui/material';
import { PlayArrow, Close } from '@mui/icons-material';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const VideoSection = () => {
    const { t } = useTranslation();
    const [open, setOpen] = useState(false);
    const videoId = 'H4zlWwV4NqI';
    const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box>
            {/* Header Section */}
            <Box sx={{ py: 6, textAlign: 'center', bgcolor: 'white' }}>
                <Typography
                    variant="h3"
                    sx={{
                        color: '#f5aa21',
                        fontWeight: 700,
                        fontFamily: "'Montserrat', sans-serif"
                    }}
                >
                    {t('video_section.title')}
                </Typography>
            </Box>

            {/* Orange Video Section */}
            <Box sx={{ bgcolor: 'white', py: 10 }}>
                <Container maxWidth="md">
                    <Box
                        sx={{
                            position: 'relative',
                            borderRadius: '20px',
                            overflow: 'hidden',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                            cursor: 'pointer',
                            aspectRatio: '16/9',
                            '&:hover .play-button': {
                                transform: 'translate(-50%, -50%) scale(1.1)',
                            }
                        }}
                        onClick={handleOpen}
                    >
                        {/* Thumbnail Image */}
                        <Box
                            component="img"
                            src={thumbnailUrl}
                            alt="Video Thumbnail"
                            sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover'
                            }}
                        />

                        {/* Dark Overlay */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                bgcolor: 'rgba(0,0,0,0.4)',
                                transition: 'bgcolor 0.3s',
                                '&:hover': {
                                    bgcolor: 'rgba(0,0,0,0.2)'
                                }
                            }}
                        />

                        {/* Play Button */}
                        <Box
                            className="play-button"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: 80,
                                height: 80,
                                bgcolor: '#f5aa21',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                            }}
                        >
                            <PlayArrow sx={{ color: 'white', fontSize: 50 }} />
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Video Modal */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="video-modal"
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        position: 'relative',
                        width: '90vw',
                        maxWidth: '1000px',
                        aspectRatio: '16/9',
                        bgcolor: 'black',
                        borderRadius: 2,
                        overflow: 'hidden',
                        outline: 'none'
                    }}
                >
                    <IconButton
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            color: 'white',
                            bgcolor: 'rgba(0,0,0,0.5)',
                            zIndex: 10,
                            '&:hover': { bgcolor: 'rgba(0,0,0,0.8)' }
                        }}
                    >
                        <Close />
                    </IconButton>
                    <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                        title="BANCAT Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>
            </Modal>
        </Box>
    );
};
