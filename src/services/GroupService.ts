import { api } from 'src/boot/axios';
import Group from 'src/types/Group';
import GroupInfo from 'src/types/GroupInfo';

type ListResponse = { data: { data: GroupInfo[]; meta: { last_page: number } } };
type ItemResponse = { data: { data: Group } };

export default {
	async getItems(): Promise<ListResponse> {
		return (await api.get('/groups')) as unknown as ListResponse;
	},

	async getCourseItems(course: number): Promise<ListResponse> {
		return (await api.get(`/courses/${course}/groups`)) as unknown as ListResponse;
	},

	async getItem(slug: string): Promise<ItemResponse> {
		return (await api.get(`/groups/${slug}`)) as unknown as ItemResponse;
	},

	async addItem(payload: { name: string; course: number }): Promise<ItemResponse> {
		return (await api.post('/groups', payload)) as unknown as ItemResponse;
	},

	async updateItem(id: number, payload: { name?: string; course?: number }): Promise<ItemResponse> {
		return (await api.put(`/groups/${id}`, payload)) as unknown as ItemResponse;
	},

	async deleteItem(slug: string): Promise<{ id: number }> {
		return (await api.delete(`/groups/${slug}`)) as unknown as { id: number };
	},

	async fresh(day: string): Promise<void> {
		await api.put('/groups/fresh-changes', {
			day,
		});
	},
};
