/* eslint-disable */
// Connecting user routes to user controllers
/**
 * @apiDefine NotFoundError
 *
 * @apiError (Error 404 - NotFound) NotFound The id of the Object was not found.
 *
 */

/**
 * @apiDefine InternalError
 *
 * @apiError (Error 500 - InternalError) InternalError The id of the Product was not found.
 *
 */

/**
 * @apiDefine in Nuevas instalaciones
 *  si no se posee una base de datos con usuarios,
 *  hay que quitar los permisos de acceso a la ruta para crear usuarios
 *  Una vez creado el usario principal hay que volver a añadir el control de acceso a la ruta
 */

/**
 * @api {post} /auth/ Login
 * @apiName Login
 * @apiGroup Login
 * @apiDescription Atención para Nuevas instalaciones
 *  si no se posee una base de datos con usuarios,
 *  hay que quitar los permisos de acceso a la ruta para crear usuarios.
 *  Una vez creado el usario principal hay que volver a añadir el control de acceso a la ruta
 *
 *
 * @apiSuccess {String} token  Return a Toke of the User for session.
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "nick": "kelo",
 *       "password": "1234"
 *     }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyIkX18iOnsic3RyaWN0TW9kZSI6dHJ1ZSwic2VsZWN0ZWQiOnt9LCJnZXR0ZXJzIjp7fSwiX2lkIjoiNWE5NDU5YTgxZWE4YmRmZDc5YmU3ZjNhIiwid2FzUG9wdWxhdGVkIjpmYWxzZSwiYWN0aXZlUGF0aHMiOnsicGF0aHMiOnsiX192IjoiaW5pdCIsInBhc3N3b3JkIjoiaW5pdCIsImVtYWlsIjoiaW5pdCIsIl9pZCI6ImluaXQifSwic3RhdGVzIjp7Imlnbm9yZSI6e30sImRlZmF1bHQiOnt9LCJpbml0Ijp7Il9fdiI6dHJ1ZSwicGFzc3dvcmQiOnRydWUsImVtYWlsIjp0cnVlLCJfaWQiOnRydWV9LCJtb2RpZnkiOnt9LCJyZXF1aXJlIjp7fX0sInN0YXRlTmFtZXMiOlsicmVxdWlyZSIsIm1vZGlmeSIsImluaXQiLCJkZWZhdWx0IiwiaWdub3JlIl19LCJwYXRoc1RvU2NvcGVzIjp7fSwiZW1pdHRlciI6eyJkb21haW4iOm51bGwsIl9ldmVudHMiOnt9LCJfZXZlbnRzQ291bnQiOjAsIl9tYXhMaXN0ZW5lcnMiOjB9LCIkb3B0aW9ucyI6dHJ1ZX0sImlzTmV3IjpmYWxzZSwiX2RvYyI6eyJfX3YiOjAsInBhc3N3b3JkIjoiJDJhJDEwJFhORGRvMTdaSG56WkVaSmoySzg3a09kMXlhanVIR1lqUnNnb21XUm1VMkdDR2JVQXFSalVDIiwiZW1haWwiOiJhZG1pbiIsIl9pZCI6IjVhOTQ1OWE4MWVhOGJkZmQ3OWJlN2YzYSJ9LCIkaW5pdCI6dHJ1ZSwiaWF0IjoxNTIwMjAyMzk4LCJleHAiOjE1MjAyMTI0Nzh9.sGadtxcXrY4Hixao6u_Ml4y4yw_-Akyrl5-KtHLS75U
 *     }
 *
 * @apiError (Error 403 - Forbidden ) NoNickOrPasswor No nick nor password provided
 * @apiError (Error 403 - Forbidden ) Nonick No nick provided
 * @apiError (Error 403 - Forbidden ) NoPassword No password provided.
 * @apiError (Error 403 - Forbidden ) NoNickNoFound Nick does not exist
 * @apiError (Error 403 - Forbidden ) NoWrongPassword Wrong password.
 *
 */

/**
 * @api {post} /user/ Create User
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission User logged
 * @apiPermission in
 *
 *
 * @apiParamExample {json} Request-Example:
 *      {
 *       "nick": "kelo",
 *       "email": "miquel@gmail.com",
 *       "password": "1234",
 *       "document": "00000000T",
 *       "name": "miquel",
 *       "surname": "catala",
 *       "phone": "652356842",
 *       "street": "Figuerets",
 *       "number": "10",
 *       "floor": "1",
 *       "door": "1",
 *       "postal_code": "03509",
 *       "city": "finestrat",
 *       "province": "Alacant",
 *       "country": "Espanya",
 *       "observations": "observations",
 *       "type": "gerente",
 *       "shop": "Revalida"
 *      }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User successfully created"
 *     }
 *
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 * @apiUse NotFoundError
 * @apiUse InternalError
 *
 */
/**
 * @api {get} /user/:id Get User or all
 * @apiName GetUser
 * @apiGroup User
 * @apiPermission User logged in
 *
 * @apiParam {Number} [id] User unique ID.
 *
 * @apiSuccessExample Success-Response Single User:
 *     HTTP/1.1 200 OK
 *     {
 *      user :{
 *       "nick": "kelo",
 *       "email": "miquel@gmail.com",
 *       "password": "1234",
 *       "document": "00000000T",
 *       "name": "miquel",
 *       "surname": "catala",
 *       "phone": "652356842",
 *       "street": "Figuerets",
 *       "number": "10",
 *       "floor": "1",
 *       "door": "1",
 *       "postal_code": "03509",
 *       "city": "finestrat",
 *       "province": "Alacant",
 *       "country": "Espanya",
 *       "observations": "observations",
 *       "type": "gerente",
 *       "shop": "Revalida"
 *      }
 *     }
 *
 * @apiSuccessExample Success-Response Multiple Users:
 *     HTTP/1.1 200 OK
 *     {
 *      users :[
 *       "nick": "kelo",
 *       "email": "miquel@gmail.com",
 *       "password": "1234",
 *       "document": "00000000T",
 *       "name": "miquel",
 *       "surname": "catala",
 *       "phone": "652356842",
 *       "street": "Figuerets",
 *       "number": "10",
 *       "floor": "1",
 *       "door": "1",
 *       "postal_code": "03509",
 *       "city": "finestrat",
 *       "province": "Alacant",
 *       "country": "Espanya",
 *       "observations": "observations",
 *       "type": "gerente",
 *       "shop": "Revalida"
 *      ]
 *     }
 *
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 * @apiUse NotFoundError
 * @apiUse InternalError
 *
 *
 */
/**
 * @api {put} /user/:id Update User
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission User logged in
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User updated successfully."
 *     }
 *
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 * @apiUse NotFoundError
 * @apiUse InternalError
 *
 */
/**
 * @api {delete} /user/:id Delete User
 * @apiName DeleteUser
 * @apiGroup User
 * @apiPermission User logged in
 *
 * @apiParam {Number} id User unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "User delete successfully."
 *     }
 *
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 * @apiUse NotFoundError
 * @apiUse InternalError
 */

/**
 * @api {post} /shop/ Create Shop
 * @apiName PostShop
 * @apiGroup Shop
 * @apiPermission User logged in
 *
 * @apiParamExample {json} Request-Example:
 *     {
 *       "name": "Revalida",
 *       "location": "Finestrat"
 *     }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Shop successfully created"
 *     }
 *
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 * @apiUse NotFoundError
 * @apiUse InternalError
 *
 *
 */
/**
 * @api {get} /shop/:id Get Shop or all
 * @apiName GetShop
 * @apiGroup Shop
 * @apiPermission User logged in
 *
 * @apiParam {Number} [id] Shop unique ID.
 *
 * @apiSuccessExample Success-Response Single Shop:
 *     HTTP/1.1 200 OK
 *     {
 *      shop :{
 *       "name": "Revalida",
 *       "location": "Finestrat"
 *     }
 *
 * @apiSuccessExample Success-Response Multiple Shops:
 *     HTTP/1.1 200 OK
 *     {
 *      shops :[
 *       "name": "Revalida",
 *       "location": "Finestrat"
 *      ]
 *     }
 *
 * @apiUse NotFoundError
 * @apiUse InternalError
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 *
 *
 */
/**
 * @api {put} /shop/:id Update Shop
 * @apiName PutShop
 * @apiGroup Shop
 * @apiPermission User logged in
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Shop updated successfully."
 *     }
 *
 * @apiUse NotFoundError
 * @apiUse InternalError
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 *
 */
/**
 * @api {delete} /shop/:id Delete Shop
 * @apiName DeleteShop
 * @apiGroup Shop
 * @apiPermission User logged in
 *
 * @apiParam {Number} id Shop unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Shop delete successfully."
 *     }
 *
 * @apiUse NotFoundError
 * @apiUse InternalError
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 */

/**
 * @api {post} /product/ Create Product
 * @apiName PostProduct
 * @apiGroup Product
 * @apiPermission User logged in
 *
 * @apiParamExample {json} Request-Example:
 *      {
 *       "name": "pantalla 19'",
 *       "category": "pantalles",
 *       "description": "pantalla lcd LG",
 *       "import": 100,
 *       "tax": 8,
 *       "supplier": "Segona ma"
 *      }
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Product successfully created"
 *     }
 *
 * @apiUse NotFoundError
 * @apiUse InternalError
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 *
 *
 */
/**
 * @api {get} /product/:id Get Product or all
 * @apiName GetProduct
 * @apiGroup Product
 * @apiPermission User logged in
 *
 * @apiParam {Number} [id] Product unique ID.
 *
 * @apiSuccessExample Success-Response Single Product:
 *     HTTP/1.1 200 OK
 *     {
 *      product :{
 *       "name": "pantalla 19'",
 *       "category": "pantalles",
 *       "description": "pantalla lcd LG",
 *       "import": 100,
 *       "tax": 8,
 *       "supplier": "Segona ma"
 *      }
 *     }
 *
 * @apiSuccessExample Success-Response Multiple Products:
 *     HTTP/1.1 200 OK
 *     {
 *      products :[
 *       "name": "pantalla 19'",
 *       "category": "pantalles",
 *       "description": "pantalla lcd LG",
 *       "import": 100,
 *       "tax": 8,
 *       "supplier": "Segona ma"
 *      ]
 *     }
 *
 * @apiUse NotFoundError
 * @apiUse InternalError
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 *
 */
/**
 * @api {put} /product/:id Update Product
 * @apiName PutProduct
 * @apiGroup Product
 * @apiPermission User logged in
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Product updated successfully."
 *     }
 *
 * @apiUse NotFoundError
 * @apiUse InternalError
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 *
 */
/**
 * @api {delete} /product/:id Delete Product
 * @apiName DeleteProduct
 * @apiGroup Product
 * @apiPermission User logged in
 *
 * @apiParam {Number} id Product unique ID.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Product delete successfully."
 *     }
 *
 * @apiUse NotFoundError
 * @apiUse InternalError
 * @apiError (Error 403 - Forbidden ) NoAccessRight You need to provide a token to access this resource.
 */
