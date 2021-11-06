import Time from './Time';


type TimeResponse = { data: { data: Time } };

export default interface Service {
	getItem(): TimeResponse;
	updateItem(payload: Time): void;
}
