"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mustache_express_1 = __importDefault(require("mustache-express"));
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
const index_1 = __importDefault(require("./routes/index"));
dotenv_1.default.config();
const servidor = (0, express_1.default)();
servidor.set('view engine', 'mustache');
servidor.set('views', path_1.default.join(__dirname, 'views'));
servidor.engine('mustache', (0, mustache_express_1.default)());
servidor.use(express_1.default.static(path_1.default.join(__dirname, '../public')));
servidor.use(express_1.default.urlencoded({ extended: true }));
servidor.use(index_1.default);
servidor.use((req, res) => {
    res.render('pages/404');
});
servidor.listen(process.env.PORT);
