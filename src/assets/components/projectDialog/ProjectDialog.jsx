import React, { useState } from 'react';
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

const ProjectDialog = ({ open, onClose, projects, initialProject }) => {
  const [currentIndex, setCurrentIndex] = useState(
    initialProject ? projects.findIndex(p => p.id === initialProject.id) : 0
  );

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const currentProject = projects[currentIndex];

  if (!currentProject) return null;

  return (
    <div className="dialog-Box-open" sx={{ backgroundColor: "rgb(240, 255, 249)",
    }}>
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="lg"
      fullWidth
      sx={{ backgroundColor: "#ffff" }}
    >
      <Box sx={{ position: 'relative'}}>
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
            {/* Left side - Image */}
            <Grid item xs={12} md={7} sx={{ position: 'relative' }}>
              <Box
                component="img"
                src={currentProject.image}
                alt={currentProject.title}
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              
              {/* Navigation arrows */}
              <IconButton
                onClick={handlePrevious}
                sx={{
                  position: 'absolute',
                  left: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                }}
              >
                <ChevronLeft size={24} />
              </IconButton>
              
              <IconButton
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 16,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  bgcolor: 'rgba(255, 255, 255, 0.8)',
                  '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                }}
              >
                <ChevronRight size={24} />
              </IconButton>
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
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Box>
    </Dialog>
    </div>
  );
};

export default ProjectDialog;

