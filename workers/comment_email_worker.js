const queue=require("../config/kue");

const commentsMailer=require("../mailers/comments_mailer");

queue.process('emails',function(job,done)
{
    console.log("Email Worker is processing the job",job.data);
    commentsMailer.newComment(job.data);

    done();


});
