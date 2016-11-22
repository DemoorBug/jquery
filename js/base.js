;(function(){
    'use strict'
    var $form_task_name = $('.add-task'),
    	task_list = [];




    	init();
    $form_task_name.on('submit',function(e){
    	var new_task = {},$input;
    	e.preventDefault();
    	$input = $(this).find('input[name=conets]')
    	new_task.content = $input.val();
    	if (!new_task.content) return;
    	
    	if(add_task(new_task)){
    		render_task_list();
    		$input.val(null)
    	}
    })

    function add_task(new_task){
    	task_list.push(new_task);
    	store.set('task_list',task_list);
    	return true
    }

    function init(){
    	task_list = store.get('task_list') || [];
    	if (task_list.length) {
    		render_task_list()
    	}
    }

    function render_task_list(){
    	var $task_list = $('.task-list');
    	$task_list.html('');
    	var i = 0;
    	for(i=0;i<task_list.length;i++){
    		var $task = render_task_tpl(task_list[i]);
    		$task_list.append($task)
    	}
    }

    function render_task_tpl(date){
	    var list_item_tpl = 
	        '<div class="task-tiem"><!-- 任务开始 -->'+
	            '<span><input type="checkbox"></span>'+
	            '<span class="task-content">'+date.content+'</span>'+
	            '<span class="fr">'+
	            '<span>删除</span>'+
	            '<span>详细</span>'+
	            '</span>'+
	        '</div><!-- 任务结束 -->';
	        return $(list_item_tpl)
    }
})();