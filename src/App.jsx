import './App.css';
import { Fragment , useState} from 'react';
import { Grommet,
	Button,
	Heading,
	Box,
	Collapsible,
	ResponsiveContext,
	Card,
	CardHeader,
	CardBody,
	CardFooter
} from 'grommet';
import { Notification, Favorite, ShareOption} from 'grommet-icons';
import AppBox from './components/Box.jsx'
function App() {
	const [showSidebar, setShowSidebar] = useState(false);
	const theme = {
		global:{
			colors: {
				brand:'#44475a',
			},
			font:{
				family: 'Roboto',
				size:'18px',
				height: '20px'},
		},
	};
  return (
	  <Fragment>
		  <Grommet theme = {theme} themeMode="light" full>
			  <ResponsiveContext.Consumer>
				  {size=>(
			  <Box fill>
			  <AppBox>
				  	<Heading level='3' margin= 'none'>Aves Chilenas</Heading>
			  		<Button icon={<Notification/>} onClick = {()=>{setShowSidebar(!showSidebar)}}/>
			  </AppBox>
				  <Box direction='row' flex overflow={{horizontal:'hidden'}}>
					  <Box flex align='center' justify='center'>
						  <Card  height="medium" width="medium" background="light-1">
  							<CardHeader pad="medium">Header</CardHeader>
 						    <CardBody pad="medium">Body</CardBody>
 						    <CardFooter pad={{horizontal: "small"}} background="light-2">
   						 <Button
  	 						 icon={<Favorite color="red" />}
   							 hoverIndicator
   						 />
    <Button icon={<ShareOption color="plain" />} hoverIndicator />
  </CardFooter>
</Card>
						  <Button primary 
							  label="Click"
							  margin = "small"	
							  size = "large"
						  ></Button>
					  </Box>
					  {size !== 'small' && (
							  <Collapsible direction='horizontal' open={showSidebar}>
					  <Box
						  flex
						width = 'medium'
						  background='light-2'
						  elevation='small'
						  align = 'center'
						  justify='center'
					  >
						sidebar
					  </Box>
				  </Collapsible>
					  )}
					  </Box>
	  </Box>
			  )}
			  </ResponsiveContext.Consumer>
		  </Grommet>
	  </Fragment>
  );
}

export default App;
