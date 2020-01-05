'use strict';

const Controller = require('egg').Controller;

class PetsController extends Controller {
  async index() {
    this.ctx.body = '416546546';
  }

  async show() {
    const { ctx } = this;
    await ctx.render('pets/show');
  }

  async edit() {
    const { ctx } = this;
    await ctx.render('pets/edit');
  }

  async update(ctx) {
    ctx.body = 123456;
  }
}

module.exports = PetsController;
