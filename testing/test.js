//import player from './functions';
jest.mock('./functions');
const { toTest } = require('./functions');
const { phases } = require('./functions');


test('test if the correct phases are returned', () => {
    const x = 0;
    const players_list = ['joe', 'max', 'alex', 'sam', 'peter', 'marta', 'bill', 'greg'];
    const phases = phases();
    expect(phases).not.toBeNull();
    expect(player).toHaveBeenCalledTimes(length(players_list));
});
class player{
    constructor(idplayery){
        this.namev=idplayery;
        this.rolev=null;
        this.statusv=0; //0=alive, 1=selected, 2=dead
        this.loverv=0;
        this.Save_potion=0;
        this.Kill_potion=0;}};

it('check if the player object is properly created', () => {
  const obj = new player('Joe');
  expect(obj.namev).toBe('Joe');
});


//------------------------------------------------
beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  player.mockClear();
});


it('Show that mockClear() is working', () => {
  // Show that mockClear() is working:
  expect(player).not.toHaveBeenCalled();

  const player = new Player();
  // Constructor should have been called again:
  expect(Player).toHaveBeenCalledTimes(1);


});

//------------------------------------------------


class Player{
    constructor(idplayery){
        this.name=idplayery;
        this.rolev=null;
        this.statusv=0; //0=alive, 1=selected, 2=dead
        this.loverv=0;
        this.Save_potion=0;
        this.Kill_potion=0;

    }
};

var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('User', function() {
    it('should save without error', function(done) {
      var user = new Player('Luna');
      assert.equal(user.name, 'Luna');
      assert.equal(user.rolev, null);
      assert.equal(user.statusv, 0);
    });
});


//---------------------------------
// var add = require('../add');
// describe('add', function(){
//     it('shouldreturn 25', function(){
//         var result = add(5);
//         assert.equal(result, 25);
//     })
// })

//---------------------
ss = require ("../functions");
main = ss.main;

describe ('SS', function(){
    describe ('#sortRowCol(a,b)', function(){
      it ('should have a sorting function', function() {
          f = main;
          assert.equal(f, 'hello');
    });
});
