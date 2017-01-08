describe('todo list manager app', function() {

    it('should add a task on todo list', function(){
       browser.get('http://127.0.0.1:8080');
       element(by.model('newTodo')).sendKeys('write first e2e test');
    });

    it('should delete a task from todo list', function(){
        element(by.css('.destroy')).click();
    });

    it('should checked all the task', function(){
        element(by.model('allChecked')).click();
    });

    //Make test execute slowly
    var slowTest = browser.driver.controlFlow().execute;

    browser.driver.controlFlow().execute = function() {
        var args = arguments;

        // set time
        slowTest.call(browser.driver.controlFlow(), function() {
            return protractor.promise.delayed(800);
        });

        return slowTest.apply(browser.driver.controlFlow(), args);
    };
});