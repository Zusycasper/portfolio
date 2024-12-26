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
    }
  }, [initialProject, projects]);

  const handleProjectChange = (direction) => {
    if (!projects || projects.length === 0) return;

    setCurrentProjectIndex(prev => {
      const newIndex = direction === 'next'
        ? (prev === projects.length - 1 ? 0 : prev + 1)
        : (prev === 0 ? projects.length - 1 : prev - 1);
      setCarouselIndex(0); // Reset carousel index when changing projects
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
            color: 'grey.500',
            zIndex: 1,
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
                            width: "700px",
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
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                    position: 'absolute',
                    top:240,
                    left:0,
                  }}
                >
                  <ChevronLeft size={50} />
                </IconButton>
                <IconButton
                  onClick={() => handleProjectChange('next')}
                  sx={{
                    bgcolor: 'rgba(255, 255, 255, 0.9)',
                    '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                    position: 'absolute',
                    top:240,
                    left:1120,
                  }}
                >
                  <ChevronRight size={50} />
                </IconButton>
              </div>
            </Grid>

            {/* Right side - Content */}
            <Grid item xs={12} md={5}>
              <Box sx={{ p: 4 }}>
                <DialogTitle sx={{ p: 0, mb: 2 }}>
                  {currentProject.title}
                </DialogTitle>

                <Typography variant="body1" color="text.secondary" paragraph>
                  {currentProject.description}
                </Typography>

                <Grid container spacing={2} sx={{ mt: 4 }}>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Type:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2">
                      {currentProject.type}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Languages:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2">
                      {currentProject.languages}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Platform:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2">
                      {currentProject.platform}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Country:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2">
                      {currentProject.country}
                    </Typography>
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Live URL:
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography variant="body2">
                      <a 
                        href={currentProject.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        style={{ color: '#4a90e2', textDecoration: 'none' }}
                      >
                        {currentProject.liveUrl}
                      </a>
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>

      {/* Custom styles for Bootstrap Carousel */}
      <style jsx global>{`
        .carousel-caption {
          left: 0;
          right: 0;
          bottom: 0;
          padding: 20px;

          
        }

        .carousel-control-prev,
        .carousel-control-next {
          width: 1px;
          z-index: 2;


        }
          .carousel-control-next-icon, .carousel-control-prev-icon {
                  background-color: transparent;
                  width: 5px;
                  height: 5px;
                  border-radius: 15px;


          }

        .carousel-indicators {
          z-index: 2;
          margin-bottom: 1rem;
        }

        .carousel-indicators button {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin: 0 5px;
        }
      `}</style>
    </Dialog>
  );
};

export default ProjectDialog;

