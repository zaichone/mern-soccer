import { getPlayers, addNewPlayer, getPlayerWithID, updatePlayer, deletePlayer } from '../controllers/playerControllers.js';

const routes = (app) => {
    app.route('/players')
        .get(getPlayers)
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        .get(getPlayerWithID)
        .put(updatePlayer)
        .delete(deletePlayer)
}

export default routes;