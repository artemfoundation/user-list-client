import React from 'react'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/core/styles'
import { useTranslation } from 'react-i18next'

const styles = theme => ({
	mainUnit: {
	    backgroundColor: theme.palette.background.paper,
	},
	mainContent: {
	 	maxWidth: 600,
	  	margin: '0 auto',
	  	padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
	  	textAlign: 'center'
	},
	mainButtons: {
	  	marginTop: theme.spacing.unit * 4,
	},
	mainImage: {
		width: 90,
		height: 90
	}
})

export default withStyles(styles)((props) => {
	const { classes } = props
	const { t } = useTranslation()

	return (
	<div className={classes.mainUnit}>
		<div className={classes.mainContent}>
		  <img src="https://twemoji.maxcdn.com/2/svg/1f9d1.svg" alt="Person" className={classes.mainImage}/>
		  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
		    {t('main.title')}
		  </Typography>
		  <Typography variant="h6" align="center" color="textSecondary" paragraph>
		    {t('main.intro')}
		  </Typography>
		  <div className={classes.mainButtons}>
		    <Grid container spacing={16} justify="center">
		      <Grid item>
		        <Button size="large" variant="contained" color="primary">
		          <Link to="/users">{t('main.button')}</Link>
		        </Button>
		      </Grid>
		    </Grid>
		  </div>
		</div>
	</div>
	)
})