/**
 * OpenInsight Basic+ Code Syntax Highlighter 
 * Plug-in for SyntaxHighlighter http://alexgorbatchev.com/SyntaxHighlighter
 *
 * For usage example see:
 * http://www.congruityservice.com/blog/syntax-highlighting-openinsight-basicplus-code
 *
 * Based on shBrushBash.js version 3.0.83 (July 02 2010)
 *
 * SyntaxHighlighter is donationware. If you are using it, please donate.
 * http://alexgorbatchev.com/SyntaxHighlighter/donate.html
 *
 * @version
 * 1.0.1 (August 01 2014)
 * 
 * @copyright
 * Copyright (C) 2014 Congruity Service LLC.
 *
 * @license
 * Dual licensed under the MIT and GPL licenses.
 */
;(function()
{
	// CommonJS
	typeof(require) != 'undefined' ? SyntaxHighlighter = require('shCore').SyntaxHighlighter : null;

	function Brush()
	{
		var keywords =	'if fi then elif else for do done until while break continue case function return in eq ne ge le ';
		keywords += 'open loop lock to end repeat or read from unlock insert';
		var commands =  '';
		commands += 'Abs Activate_Save_Select Alias_Table Alpha ASCII.SUBS ASCII_BFSC Base64decode BASIC BCheckLegalUser ' +
'Before_word Blank_Struct Blint BOOTFS BORDER.UP BRW_COL_DET_Events BRW_Grouping_Events BRW_label_Det_Events ' +
'Btree.Extract BTREE.SUB.CONTAIN BTREE.SUB.EQ BTREE.SUB.MATCH BTREE.SUB.USER BTREE.WRITE BUILD.INDEX Build_Report '+
'Build_Verify_Key CALCALYST Calculate_f_correlative CAPTURE CATALYST CFG_Language Change_Window_Font ChangeUDH Char '+
'CHATTR CHECK_CHARACTER CHOOSELABEL_EVENTS Clear_select_queue CMD Collect.IXVals COLOR.TO.ESC Colortester COMOCAPTURE '+
'Compile_event Contains_word Control_on ConvCntrlType CONVERT.KEYSTROKES Copy_Row_Events Copy_table CopyOSFile CREATE_DIALOG '+
'CREATE_HELP Create_table Create_volume Create_XML_XSD_Schema CreateCallBack CREATESWAP_NEWDB CS_Spy CTO_COMMUTER_MODULE '+
'CTO_GUI_FUNCTION  CTO_MANAGE_LISTS CTO_POPUP CTO_PRINTER_CLOSE CTO_RUNWIN CTO_SET_PRINTER CTODICT.MFS Data_validation '+
'DEFINE.TABS Define_Struct Delete_index Delete_repos_type Delete_Save_Select Delete_table Delete_volume DELETEACCOUNT_SUB '+
'DELETEFILE.SUB DELETELIST_SUB DELETETABLE_SUB Detach_volume DETACHTABLE_SUB Dialog_Box Dict_Depend Dict_mfs_build DIRECT_PRINTER '+
'DISPLAY.BORDER DLg_MFS_Events DO_AT DO_CTO DO_ECHO DO_FIND DO_FORMAT DO_HEADING DO_INPUT DO_LOGINPROC DO_OPEN DO_PAGINATE '+
'DO_PARSE DO_PRINT DO_PRINTER_OFF DO_PROC DO_PROMPT DO_REFORMAT DO_SHELL DO_STACK DO_TRACE DO_VERB2 Document_Menu Document_Window '+
'DRIVER_CONTROL DSMethod ED ED_Colorize_Prog EDIT.MACROS Editor_Child_Events2 Editor_Find_Events Editor_Replace_Bar_Events END_WINDOW '+
'EnDeCrypt ENVIRON EVAL EW.COMPARE EW.ENGLISH EW.LIMIT EW.PARSER EW.TUTOR EW.WINDOW ExecNpHandler Exporttype_events Extract_si_keys '+
'F.distributor FAT.FINGER FETCH.VOLUME Field FILTER.SELECT First_word Fix_lh FMT Form_Language_Cfg FORMAT_PROG FORMULA FormUpdate '+
'FSMSG Ftpdelfile Ftplist Ftprenamefile FUNCTION.KEY GET.FILING.SYSTEM.NAME Get_all_types Get_app_info Get_Balanced Get_bond_user '+
'GET_CONTROL_METAINFO  Get_current_event Get_env GET_FILE_REC GET_HANDLE_FROM_PROCESSID Get_Language Get_lh_info GET_LIST_TABLES '+
'GET_MACHINE_NAME Get_Printer Get_Property Get_repos_types_by_family GET_SC_APPID Get_server_names Get_si_values Get_status '+
'Get_table_app_ptr Get_table_attribs Get_table_types GET_VID_INFO Get_WinMsgVal Get_xo_info GetAppID GETCOLORS GETECHO '+
'GETLIST_SUB Getmail GETREPORT GETSYSTABLES GetUserLevel GETVOLUMELABEL Getwebtime GUAR_ASSIGN Help_Child Highlight '+
'Import.ascii_sub IN.VALUE INCR.DECR Index Index.flush Index.reducer Indexing2 INET_Aborted Inet_FormLoad Inet_FormWrite '+
'Inet_Oi_Xml INET_Repos Inet_Rlist Inet_Trace INIT INIT.STATUS Initialize INPUTCLEAR INSTALLPROTOTYPE IO.ENV Is_format_str '+
'IsEntityCheckedOut IsValidUser JOINER LastKey LH_FieldInfo LH_VERIFY_SUB LHDUMP LIST.FLDIX List_app_users List_Component_Fields '+
'LIST_DICT List_Index List_select_queue LIST_TABLES List_user_sub List_users LIST_VOLUMES LISTBASIC ListDatasetArguments Listdict '+
'Load_lnd_set Locale_Date_Format LOWER MAKE.LIST MAKETABLE_SUB MAPDICT_CONVCORR Max MEMSPACE MENU.UPDATE MERGE.MACRO.SUB MergeRows '+
'MESSAGE mike  MixedCase MOUSE_SUBS MOVETO Msg Msg_Child MTWIN_INIT NAMEVOLUME_SUB NETWORK_SUB NewEntity NEWREPORT_EVENTS Null '+
'O4WAddThis O4WALIGNSTYLE O4WATTRIBUTESTYLE O4WBREADCRUMBS O4WBUTTON O4WCACHE O4WCELLSTYLE O4WCHECKBOX O4WCHECKSECURITY O4WCOLORPICKER '+
'O4WCOLORS O4WCOLORSTYLE O4WCookie O4WDATASTYLE O4WDATEPICKER O4WDIALOG O4WDIVIDER O4WDownload O4WERROR O4WESCAPE O4WFacebook '+
'O4WFIXEDTEXT O4WFOCUS O4WFOOTER O4WFORM O4WGENERATEID O4WGETMOBILE O4WGetValue O4WGOTOTAB O4WGraphData O4WGraphEnd O4WGraphStart '+
'O4WHEADER O4WHelpStyle O4WHTMLOPTIONS O4WI_LOADPLUGINDATA O4WIconButton O4WIMAGE O4WIMAGEBUTTON O4WINPUTBOXOPTIONS O4WINPUTOPTIONS '+
'O4WINPUTSTYLE  O4WLINK O4WLinkedIn O4WLINKSTYLE O4WLINKSTYLE O4WLISTBOX O4WLISTBOXOPTIONS O4WLISTBOXSTYLE O4WLISTEND O4WLISTITEM '+
'O4WLISTSTART O4WMARKEDOPTIONS O4WMARKEDSTYLE O4WMenu O4WMOBILEBUTTONOPTIONS O4WMOBILEOPTIONS O4WNUMBERBOX O4WPLUGIN O4WPopup '+
'O4WPopupReturn O4WPOSITIONSTYLE O4WPWDBOX O4WQUALIFYEVENT O4WRADIOBUTTON O4WRAW O4WRAWSTYLE O4WRedirect O4WRESPONSE O4WRESPONSEOPTIONS '+
'O4WRESPONSESTYLE   O4WSCRIPT O4WSectionEnd O4WSectionStart O4WSETBREADCRUMB O4WSETCELL O4WSETHISTORY O4WSETMOBILE O4WSIZESTYLE O4WSPACE '+
'O4WSTORE O4WSTYLESHEET O4WTableAddRow O4WTABLEADVANCEDOPTIONS O4WTABLECELLOPTIONS O4WTableDelCol O4WTableDelRow O4WTABLEEND '+
'O4WTABLEHEADER O4WTABLEMODIFY O4WTABLEPAGEROPTIONS  O4WTABLESTART O4WTABLESTYLE O4WTABOX O4WTABOX O4WTEXT O4WTEXTAREA O4WTEXTBOX '+
'O4WTEXTOPTIONS O4WTEXTSTYLE O4WTIMEPICKER  O4WTIMER O4WTITLE O4WUPDATE O4WUPLOADBOX O4WVALIDATEOPTIONS O4WVALIDATESTYLE '+
'OESocketServer_Example OFV OI_GetTempFileName OIPI_calls OIPI_CSV OIPI_FrmPrint_Events OIPI_OnTable OIPI_OnTextXY OIPI_Variables '+
'OIWIN_compile_impacts OIWIN_compile_semantics OIWIN_formLoad OIWIN_noteclose OIWIN_parsequery OIWIN_qbfNext OIWIN_QBFRUN '+
'OIWIN_SQLDoQuery OIWIN_SQLRead OldStuff_Sub OLIST_Parse_TEMP OList_Synonyms OPENAPP_SUB OR_VIEW ORMAIN32_EVENTS ORMAIN32_OPN_EVENTS '+
'ORMAIN32_override_events ORMAIN32_testrun_events ORMAIN_EVENTS ORMAIN_OPN_EVENTS ORMAIN_slc_events ORMAIN_SLT_EVENTS OSERROR '+
'Owner_Draw PAGED.MSG PAINT.WINDOWS PAINTBIND_COLS PAINTCOLORS PAINTFILE PAINTSUB PAN Parse_Struct  Parse_XML_Schema PARSEINI '+
'Pdisk PICK_CONV PlaceDialog POP.SELECT POP.UP POP_UP_SOFT POPDEF Popup Popup_Year post_event Printer_Table_Conv  PrintSetup PROGRESS '+
'PS_Get_Printer PS_LINEPRINt PS_newpage PS_OIPI_OnTextXY PS_ontextbox PSDOCFINISH PSList PUSH.SESSION PUTCOLORS PWDEF QBEPopFiles '+
'QryMethod QUALIFY.TABLE queryKeys QUICKDEXER RAISE RB_Wizard RCHAR_CLEARFILE RCHAR_COPY_PROGRAM RCHAR_CREATEFILE RCHAR_ED RCHAR_LOGOFF '+
'RCHAR_MAPNAME RCHAR_SET_PRINTER RCHAR_TDUMP RCHAR_TREAD RDK_create_repository RDK_Gasgauge RDKCreateApplication RDKddConvDbProcess '+
'RDKDeployDef RDKExtDatabaseInstallInfo RDKExtPrepApplication RDKExtractAlias RDKExtractEntities RDKExtractOSBody RDKextShowIxProgress '+
'RDKGetClassFromHierarchy RDKGetHierarchyEntities RdkGetItemsFromRepos RDKInstallInit RDKModuleInstall RDKTranslateType RDKvAddAll '+
'RDKValidateExtractPath RDKvSaveResult Rebuild_sysrepos_ix REBUILDINDEX_SUB Recompile_proc Regenerate_bang_record RELATER '+
'RELEASE_LOCK Rename_table Repos.oiwin..compile Repos.XML.Export.Design Repos_BFS Repos_checkin Repos_forward  '+
'REPOS_GET_CHECKOUTS_TRANS Repos_getcheckinfo_trans Repos_invert_write Repos_mirror_compare Repos_Mirror_Synchronize '+
'REPOS_RESOLVE_ENTITY Repos_resolve_references Repos_setcheckinfo_trans Reposix_build Reposix_delete Reposix_remove '+
'Reposix_write Request_info RESET.LOCKS RESIZE RESTART Rev_Bgnd_Update Rev_Compiler_Expand REV_IDE REV_IDE_ENTITY_HISTORY '+
'REV_IDE_Inspector REV_IDE_PE_IMPACT_ANALYSIS REV_Ide_PE_Repos_Access_Permit REV_IDE_PE_REPOS_DESCRIPTION Rev_Ide_PE_Sysupgrade '+
'REV_IDE_Proxy REV_IDE_PS_Repos_Explore REV_IDE_PS_Repository REV_ide_setspy REV_ide_sizemanager REV_IDE_TP_Blank Rev_IDE_TP_Explorer '+
'REV_IDE_TP_Main REV_IDE_TPM_Cfg REV_IDE_WinAPI REV_line_loc REV_obj_cache REV_object_cache REV_Object_Form REV_Object_Property_Sheet '+
'REV_Object_TabbedPanel REV_Object_ToolPanel REV_sql REVCMD_INPUT REVCMD_OUTPUT REVCMD_WRAPUP RevGetRelationals RevODBC_Parse RGB RList '+
'Rlist_EDT_Callback RLIST_EXECUTE_CALLBACK RListTokenize  RTI_CDOMail RTI_OS_Directory Run_BRW_Report Run_Report Save_env SEC SEEK '+
'SELECT.SEEK SELECT_HELP Send_Dyn Send_Message Sendmail SET_DIALOG_INFO Set_Env Set_Form_Language set_idxsvr Set_Language SET_MIOS '+
'SET_OISTATE Set_Printer Set_property Set_status Set_table_attribs Set_template SETPTR SHOW_MENU SINGLETON_DETECT Smart_split Smtpmail '+
'SP.CLOSE SP.DEFINE Sp.Info SP.OPEN Split_On_Comma SQL.INSERT.PROC SQL.QUERY.PROC	 SQL.SCHEMA.VIEW SQL.SUB.EVAL SQL_DISTINCT '+
'SQL_EXPLODE SQL_INDEX_REDUCE SQL_JOIN_RUN SQL_SERVER_PROC SQL_UNION SQL_UPDATE_PROC SQLExp_Create SQLExp_Select SQLExp_Updates '+
'SSN_FORMAT START_MDICHILD START_PROJECT START_WINDOW STARTPTR StartTool STOP_CHARACTER Struct_Def Struct_Flush Struct_To_Var '+
'SUB.EDIT SUB_FORMAT Swap_Database Synch_repos_dict SYSPRINTERS_LIST Systables_Open_Events TRACE TRANSACT U2_BFS_GET_SERVER_DBS '+
'U2_BOND_SUBS U2_Btree_Extract U2_Conv U2_DICTIONARY_CONVERTER_EVENTS U2_ExecItype U2_Get_Server_Filename U2_GetList U2_KeepAlive '+ 
'U2_map_v_correlative U2_MAPDICT U2_Oconv U2_Proc_Call_Example U2_Refresh_Shadow U2_SaveList U2_SetTrace U2_SyncMap U2_UD_SUBR '+
'Update_columns Update_index Update_proc_list Update_repos_log URL_FORMAT USE_ATTACH_IMAGE V39 V88 Validate Validate_sysrepos_ix '+
'Var_To_Struct VERB2 VERSION VSPrinter_Events Web_GetKey WIN.FREEFORM WIN.MPR WIN.RECORD WINDOW.INIT WINTEGRATE_CHILD_FORM Wizard_Invisible '+
'Write_dict_column Xlate XML_Config_Sub XML_Importer XML_Main XML_SELECT XO_Child XODefaults XOLogin '+
'';

		var builtins =	'subroutine declare function';
		this.regexList = [
			{ regex: SyntaxHighlighter.regexLib.multiLineCComments,			css: 'comments' },
			{ regex: /^#!.*$/gm,											css: 'preprocessor bold' },
			{ regex: /^\*.*$/gm,											css: 'comments' },
			{ regex: /;\s?\*.*$/gm,											css: 'comments' },
			{ regex: /\d/gm,												css: 'constants' },
			{ regex: /\/[\w-\/]+/gm,										css: 'plain' },
			{ regex: SyntaxHighlighter.regexLib.singleLinePerlComments,		css: 'comments' },		// one line comments
			{ regex: SyntaxHighlighter.regexLib.doubleQuotedString,			css: 'string' },		// double quoted strings
			{ regex: SyntaxHighlighter.regexLib.singleQuotedString,			css: 'string' },		// single quoted strings
			{ regex: new RegExp(this.getKeywords(keywords), 'gmi'),			css: 'builtins' },		// keywords
			{ regex: new RegExp(this.getKeywords(commands), 'gmi'),			css: 'functions' },		// commands
			{ regex: new RegExp(this.getKeywords(builtins), 'gmi'),			css: 'builtins' },
			
			];
	}

	Brush.prototype	= new SyntaxHighlighter.Highlighter();
	Brush.aliases	= ['basicplus'];

	SyntaxHighlighter.brushes.BasicPlus = Brush;

	// CommonJS
	typeof(exports) != 'undefined' ? exports.Brush = Brush : null;
})();
