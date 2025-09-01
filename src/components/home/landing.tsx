import React from 'react'
import Image from 'next/image'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Avatar from '@mui/material/Avatar'
// reuse MUI styles from other components; no custom styled needed here
import { Search, Book, Person, TrackChanges, ContentCut, Favorite, Science, LocalHospital } from '@mui/icons-material'

interface StepProps { icon: React.ReactNode; title: string; description: string; duration: string }

const StepCard: React.FC<StepProps> = ({ icon, title, description, duration }) => (
    <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
            <Avatar sx={{ bgcolor: 'primary.main' }}>{icon}</Avatar>
            <Box>
                <Typography variant="subtitle2" sx={{ color: 'secondary.main', fontWeight: 700, fontSize: 12 }}>
                    STEP
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: 700, mt: 0.5 }}>
                    {title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', mt: 1 }}>
                    {description}
                </Typography>
                <Typography variant="caption" sx={{ display: 'block', mt: 1, color: 'text.secondary' }}>
                    Duration: {duration}
                </Typography>
            </Box>
        </Box>
    </Paper>
)

interface CategoryProps { icon: React.ReactNode; title: string; count: number }

const CategoryCard: React.FC<CategoryProps> = ({ icon, title, count }) => (
    <Paper elevation={1} sx={{ p: 4, borderRadius: 2, textAlign: 'center' }}>
        <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56, mb: 2, marginX: 'auto' }}>{icon}</Avatar>
        <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>{count} specialties</Typography>
    </Paper>
)

const Landing: React.FC = () => {
    return (
        <Box id="hero" sx={{ backgroundColor: 'background.paper', position: 'relative', pt: 4, pb: { xs: 8, md: 10 } }}>
            <Container maxWidth="lg">
                <Grid container spacing={0} sx={{ flexDirection: { xs: 'column', md: 'unset' } }}>
                    <Grid item xs={12} md={7}>
                        <Box sx={{ textAlign: { xs: 'center', md: 'left' }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Box sx={{ mb: 2 }}>
                                <Typography component="h2" sx={{ fontSize: { xs: 34, md: 48 }, fontWeight: 'bold' }}>
                                    Doctor Pathways
                                </Typography>
                                <Typography sx={{ color: 'text.secondary', mt: 1 }}>
                                    Navigate your journey from medical school to specialty training in Australia
                                </Typography>
                            </Box>

                            <Box sx={{ mt: 3 }}>
                                <TextField
                                    fullWidth
                                    placeholder="Search specialties..."
                                    variant="filled"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Search sx={{ color: 'rgba(0,0,0,0.54)' }} />
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={5} sx={{ position: 'relative' }}>
                        <Box sx={{ lineHeight: 0 }}>
                            <Image src="/images/home-hero.jpg" width={775} height={600} alt="Hero img" />
                        </Box>
                    </Grid>
                </Grid>

                {/* Steps - use feature styling spacing */}
                <Box sx={{ boxShadow: 2, py: 4, px: 7, borderRadius: 4, mt: 6 }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={12}>
                            <StepCard
                                icon={<Book />}
                                title="Medical School"
                                description={`Complete your medical degree (MD/MBBS) at an accredited Australian medical school. Focus on core rotations and begin exploring specialties.`}
                                duration="4-6 years"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <StepCard
                                icon={<Person />}
                                title="Internship (PGY1)"
                                description={`Your first year as a doctor. Complete required rotations in Medicine, Surgery, Emergency Medicine, and gain general registration with AHPRA.`}
                                duration="1 year"
                            />
                        </Grid>
                        <Grid item xs={12} md={12}>
                            <StepCard
                                icon={<TrackChanges />}
                                title="Specialty Training"
                                description={`Residency, applications, and 3-6 year advanced training in your chosen medical specialty. Complete rotations, exams, and requirements specific to your specialty college.`}
                                duration="3-7 years (including residency and applications)"
                            />
                        </Grid>
                    </Grid>
                </Box>

                {/* Specialties */}
                <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default', mt: 6 }}>
                    <Container>
                        <Typography variant="h4" sx={{ fontWeight: 800, textAlign: 'center', mb: 2 }}>Ready to Explore Specialties?</Typography>
                        <Typography variant="subtitle1" sx={{ color: 'text.secondary', textAlign: 'center', mb: 4 }}>
                            Discover detailed information about application processes, requirements, and pathways for each specialty.
                        </Typography>

                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6} lg={3}>
                                <CategoryCard icon={<ContentCut />} title="Surgical Specialties" count={9} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <CategoryCard icon={<Favorite />} title="Medical Specialties" count={6} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <CategoryCard icon={<Science />} title="Diagnostic Specialties" count={2} />
                            </Grid>
                            <Grid item xs={12} md={6} lg={3}>
                                <CategoryCard icon={<LocalHospital />} title="Primary Care" count={1} />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Footer note */}
                <Box sx={{ mt: 6, textAlign: 'center', color: 'text.secondary' }}>
                    <Typography variant="caption">
                        © 2024 MedPathfinder Australia. Information is for guidance only. Always check official college websites for the most current requirements.
                    </Typography>
                </Box>
            </Container>
        </Box>
    )
}

export default Landing
