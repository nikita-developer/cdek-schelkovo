const mailService = require('../service/mail-service')
const {validationResult} = require("express-validator");
const ApiError = require("../exceptions/api-error");

class DogovorController {
    async dogEmployed (req, res, next) {
        try {
            // проверка на ошибки
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }

            // получаем данные с формы
            const {fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment, robots} = req.body

            // проверка на роботов
            if(robots !== '') {
                return next(ApiError.BadRequest('Скрытое поле не пустое', [{msg: `Скрытое поле не пустое`, param: 'robots'}]))
            }
            // вызываем функцию и отправляем сообщение
            const result = await mailService.sendEmployed(fio, inn, birth, phone, email, passnumber, passdata, passwho, adres, site, bank, numberschet, korschet, bik, comment).catch(console.error);
            // ответ
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async dogIp (req, res, next) {
        try {
            // проверка на ошибки
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }

            // получаем данные с формы
            const {fio, inn, yradres, faktadres, bik, raschet, thisfio, directorfio, osnovaniya, phone, email, site, comment, robots} = req.body

            // проверка на роботов
            if(robots !== '') {
                return next(ApiError.BadRequest('Скрытое поле не пустое', [{msg: `Скрытое поле не пустое`, param: 'robots'}]))
            }
            // вызываем функцию и отправляем сообщение
            const result = await mailService.sendIp(fio, inn, yradres, faktadres, bik, raschet, thisfio, directorfio, osnovaniya, phone, email, site, comment).catch(console.error);
            // ответ
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }

    async dogYr (req, res, next) {
        try {
            // проверка на ошибки
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }

            // получаем данные с формы
            const {name, inn, faktadres, numbersvid, datasvid, bik, raschet, thisfio, directorfio, phone, osnovaniya, email, site, comment, robots} = req.body

            // проверка на роботов
            if(robots !== '') {
                return next(ApiError.BadRequest('Скрытое поле не пустое', [{msg: `Скрытое поле не пустое`, param: 'robots'}]))
            }
            // вызываем функцию и отправляем сообщение
            const result = await mailService.sendYr(name, inn, faktadres, numbersvid, datasvid, bik, raschet, thisfio, directorfio, phone, osnovaniya, email, site, comment).catch(console.error);
            // ответ
            return res.json(result)
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new DogovorController()
