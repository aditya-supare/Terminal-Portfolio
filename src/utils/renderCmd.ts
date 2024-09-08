import About from "../components/commands/About";
import Bio from "../components/commands/Bio";
import Contact from "../components/commands/Contact";
import Help from "../components/commands/Help";
import NotFound from "../components/commands/NotFound";
import Projects from "../components/commands/Projects";
import Skills from "../components/commands/Skills";
import { CmdHistory } from "../type";

function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "ls":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		case "ls ":
			return {
				cmd,
				Component: Help,
				time: "",
			};	
		case "bio":
			return {
				cmd,
				Component: Bio,
				time: "",
			};
		case "bio ":
			return {
				cmd,
				Component: Bio,
				time: "",
			};	
		case "skill":
			return {
				cmd,
				Component: Skills,
				time: "",
			};
		case "skill ":
			return {
				cmd,
				Component: Skills,
				time: "",
			};	
		case "contact":
			return {
				cmd,
				Component: Contact,
				time: "",
			};
		case "contact ":
			return {
				cmd,
				Component: Contact,
				time: "",
			};	
		case "about": {
			return {
				cmd,
				Component: About,
				time: "",
			};
		}
		case "about ": {
			return {
				cmd,
				Component: About,
				time: "",
			};
		}
		case "project": {
			return {
				cmd,
				Component:Projects,
				time: "",
			}
		}
		case "project ": {
			return {
				cmd,
				Component:Projects,
				time: "",
			}
		}
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;
