import team from './team.json'

export function getAll() {
    return Promise.resolve(team);
}
