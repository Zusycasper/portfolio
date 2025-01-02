import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
  Box,
  Grid,
} from '@mui/material';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectDialog = ({ open, onClose, projects, initialProject }) => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (initialProject && projects) {
      const index = projects.findIndex(p => p.id === initialProject.id);
      setCurrentProjectIndex(index !== -1 ? index : 0);
      setCarouselIndex(0); // Reset carousel index to 0 on initial load
    }
  }, [initialProject, projects]);

  const handleProjectChange = (direction) => {
    if (!projects || projects.length === 0) return;

    setCurrentProjectIndex((prevIndex) => {
      const newIndex =
        direction === 'next'
          ? (prevIndex + 1) % projects.length
          : (prevIndex - 1 + projects.length) % projects.length;
      setCarouselIndex(0); // Reset carousel index when switching projects
      return newIndex;
    });
  };

  const currentProject = projects && projects[currentProjectIndex];

  if (!currentProject) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
    >
      <Box sx={{ position: 'relative' }}>
        <IconButton
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'black',
            zIndex: 2,
          }}
        >
          <X size={24} />
        </IconButton>

        <DialogContent sx={{ p: 0, display: 'flex', minHeight: '80vh' }}>
          <Grid container>
            {/* Left side - Carousel */}
            <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
              {currentProject.images && currentProject.images.length > 0 ? (
                <Carousel
                  activeIndex={carouselIndex}
                  onSelect={(index) => setCarouselIndex(index)}
                  interval={5000}
                  className="h-full"
                >
                  {currentProject.images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <div className="aspect-[4/3] w-full">
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="object-cover"
                          style={{
                            width: "100%",
                            height: "450px",
                          }}
                        />
                        <Carousel.Caption className="bg-black bg-opacity-50 rounded p-3">
                          <h3 className="text-xl font-bold">{image.caption}</h3>
                          <p>{image.description}</p>
                        </Carousel.Caption>
                      </div>
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <div className="aspect-[4/3] w-full bg-gray-200 flex items-center justify-center">
                  <Typography variant="h6">No images available</Typography>
                </div>
              )}

              {/* Project navigation buttons */}
              <div className="absolute top-1/2 left-4 right-4 flex justify-between transform -translate-y-1/2 z-10">
                <IconButton
                  onClick={() => handleProjectChange('prev')}
                  sx={{
                    color: 'black',
                    bgcolor: 'rgba(240, 240, 240, 0.18)',
                    '&:hover': { bgcolor: 'rgba(71, 77, 255, 0.8)' },
                  }}
                >
                  <ChevronLeft size={30} />
                </IconButton>
                <IconButton
                  onClick={() => handleProjectChange('next')}
                  sx={{
                    bgcolor: 'rgba(240, 240, 240, 0.18)',
                    '&:hover': { bgcolor: 'rgba(71, 77, 255, 0.8)' },
                  }}
                >
                  <ChevronRight size={30} />
                </IconButton>
              </div>
            </Grid>

            {/* Right side - Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ p: { xs: 2, md: 4 } }}>
                <DialogTitle sx={{ p: 0, mb: 2, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                  {currentProject.title}
                </DialogTitle>

                <Typography variant="body1" color="text.secondary" paragraph>
                  {currentProject.description}
                </Typography>

                <Grid container spacing={2} sx={{ mt: 4 }}>
                  {[
                    { label: "Type", value: currentProject.type },
                    { label: "Languages", value: currentProject.languages },
                    { label: "Platform", value: currentProject.platform },
                    { label: "Country", value: currentProject.country },
                    { label: "Live URL", value: currentProject.liveUrl, isLink: true },
                  ].map((item, index) => (
                    <React.Fragment key={index}>
                      <Grid item xs={4}>
                        <Typography variant="subtitle2" color="text.secondary">
                          {item.label}:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="body2">
                          {item.isLink ? (
                            <a
                              href={item.value}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ color: '#4a90e2', textDecoration: 'none', wordBreak: 'break-word' }}
                            >
                              {item.value}
                            </a>
                          ) : (
                            item.value
                          )}
                        </Typography>
                      </Grid>
                    </React.Fragment>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>
    </Dialog>
  );
};

export default ProjectDialog;
