function main(tbl){
	attr("courses",dao.query("app_course",Cnd.where("1","=",1).desc("id"),new Pager(1,4)))
}