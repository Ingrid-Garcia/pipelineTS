import dynamodb from 'dynamodb';
<<<<<<< HEAD
import {AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN} from "../config";


dynamodb.AWS.config.update({
    accessKeyId:AWS_ACCESS_KEY_ID,
    secretAccessKey:AWS_SECRET_ACCESS_KEY,
    sessionToken:AWS_SESSION_TOKEN,
    region:AWS_REGION
=======
import {AWS_REGION, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN} from '../config';

dynamodb.AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey:AWS_SECRET_ACCESS_KEY,
    sessionToken: AWS_SESSION_TOKEN,
    region: AWS_REGION
>>>>>>> 4663778176500195074bd5aa382ae5a913e24350
});

export default dynamodb;