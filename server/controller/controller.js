module.exports = {
    
    getCategories: (req, res, next) => {
        const db = req.app.get('db');
        db.find_categories()
        .then(response => res.status(200).send(response))
        .catch((err) => res.status(500).send('something went wrong'))
    },

    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.params;
        // console.log(req.params)
        db.find_posts(id)
        .then(response => res.status(200).send(response))
        .catch( (err) => res.status(500).send('something went wrong'))
    },

    getCurrentUser: (req, res, next) => {
        const db = req.app.get('db');
        let {user_id} = req.user;
        // console.log(user_id)
        db.find_current_user(user_id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    createPost: (req, res, next) => {
        const db = req.app.get('db');
        let {op, cat_id, user_id} = req.body;
        // console.log(req.body)
        db.create_op(op, cat_id, user_id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    }
}