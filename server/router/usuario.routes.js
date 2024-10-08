const express = require("express")
const appUsuario = express.Router()
const usuario = require("../model/usuario")

appUsuario.use(express.json());

appUsuario.post("/newUser", async (req, res) => {
    let objUsuario = new usuario();
    const resultado = await objUsuario.newUser(req.body);
    res.status(201).json(resultado);
    objUsuario.destructor()
});

appUsuario.get("/getUserId/:id", async (req, res) => {
    let objUsuario = new usuario();
    const idObject = { id: parseInt(req.params.id) };
    res.status(200).send(await objUsuario.getUserById(idObject))
    objUsuario.destructor()
});

appUsuario.post("/updateRol", async (req, res) => {
    let objUsuario = new usuario();
    const resultado = await objUsuario.updateUserRole(req.body);
    res.status(201).json(resultado);
});

appUsuario.get("/getUserRol/:rol", async (req, res) => {
    let objUsuario = new usuario();
    res.status(200).send(await objUsuario.getUsersByRole(req.params.rol))
});

appUsuario.post("/getUser", async(req, res) => {
    let objUsuario = new usuario()
    const resultado = await objUsuario.getUser(req.body)
    res.status(200).json(resultado)
    objUsuario.destructor()
})

module.exports = appUsuario;