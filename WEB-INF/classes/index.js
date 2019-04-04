function main(tbl){
	cache.put("dicts",dao.query("sys_dict",Cnd.where("id","<","9")))
	attr("courses",dao.query("app_course",Cnd.where("1","=",1).desc("id"),new Pager(1,4)))
	attr("combos",dao.query("app_combo",Cnd.where("1","=",1).desc("id"),new Pager(1,4)))
	attr("articles",dao.query("app_article",Cnd.where("1","=",1).desc("id"),new Pager(1,4)))
}