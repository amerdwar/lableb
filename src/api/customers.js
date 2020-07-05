
import customers from './customers.json'

export function getAllCustomers() {
    return Promise.resolve(customers);
}
