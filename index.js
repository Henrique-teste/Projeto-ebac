$(document).ready(function(){

})
$('form').on('submit',function(e){
    e.preventDefault();
    const clickTarefa = $('#nova-tarefa').val();
    const tarefaNova = $('<li></li>')
$(`<a src="">${clickTarefa}</a>`).appendTo(tarefaNova);
$(tarefaNova).appendTo('ul');
$('#nova-tarefa').val('')
})
