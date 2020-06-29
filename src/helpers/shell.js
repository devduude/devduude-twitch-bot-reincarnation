import util from 'util';
import { exec as cbExec } from 'child_process';


const exec = util.promisify(cbExec);


export default exec;
