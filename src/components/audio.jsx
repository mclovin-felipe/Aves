import react from "react";
const Audio = (props) => {
	const audio = props.props.file
	if(props.props.file === '' || props.props.file===undefined){
		return (<p><strong>No hay sonidos</strong></p>);
	}else{
const re = new RegExp('(http|https):\/\/([^\/\r\n]+)(\/[^\r\n]*)?')
		console.log(audio)
		console.log(audio.match(re));
		return (
			<audio controls>
    		<source src={audio} type="audio/mp3"/>
			</audio>
		);
	}
}
export default Audio;
