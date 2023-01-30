import ReactGist from "react-gist";

const Gist = ({ id, file }: { id: string; file: string }) => {
	return (
		<div className={"-mx-10 sm:-mx-4"}>
			<ReactGist id={id} file={file} />
		</div>
	);
};

export default Gist;
