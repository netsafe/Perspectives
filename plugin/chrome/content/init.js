    function evtLoad() {
      Perspectives.init_data();
      Perspectives.initNotaries();
      var root_prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

      // call this *after* the document has loaded
      // so we have access to the stringbundle from statusbar.xul
      Perspectives.prompt_update();

      var firstrun = root_prefs.getBoolPref("extensions.perspectives.first_run");
      if (firstrun) {
	  HostContainerInterface.setPref("extensions.perspectives.first_run", false);
          var bname = "perspectives-status-button";

          if (!document.getElementById(bname)) {
            // user has just installed the extension and has no button. add one
            addToolbarButton("nav-bar", bname, "urlbar-container");
          }
          // else the user has already added the button previously
          // we don't want to touch it
      }

      if(!Perspectives.root_prefs.getBoolPref("extensions.perspectives.show_label")){
        document.getElementById("perspective-statusbar-label").hidden = true;
      }
    }

    // Thanks to Calomel SSL Validation plugin code
    function addToolbarButton(toolbarId, buttonId, beforeId) {
    Pers_debug.d_print("error","Inserting button " + buttonId + " into " + toolbarId + " before beforeId");
    try {
          var firefoxnav = document.getElementById(toolbarId);
          var curSet = firefoxnav.currentSet;
	  var re = new RegExp(beforeId);
          if (curSet.indexOf(buttonId) == -1)
          {
            var set;
            // Place the button before the urlbar
            if (curSet.indexOf(beforeId) != -1){
              set = curSet.replace(re, buttonId + "," + beforeId);
	      Pers_debug.d_print("error", "inserting with RegEx");
	    } else { // at the end
              set = curSet + "," + buttonId;
	      Pers_debug.d_print("error", "inserting at the end");
	    }
            firefoxnav.setAttribute("currentset", set);
            firefoxnav.currentSet = set;
            document.persist(toolbarId, "currentset");
            // If you don't do the following call, funny things happen
            try {
              BrowserToolboxCustomizeDone(true);
            }
            catch (e) { }
          }
        }
        catch(e) { }
    }

    // Preference migration from old names to new ones. Written by Alexey Vesnin
    function migrateOldSettings() {
	var preflist=["perspectives.quorum_thresh","perspectives.required_duration","perspectives.security_settings","perspectives.max_timespan_for_inconsistency_test","perspectives.weak_consistency_time_limit","perspectives.max_cache_age_sec","perspectives.svg","perspectives.whitelist","perspectives.additional_notary_list","perspectives.default_notary_list","perspectives.exceptions.permanent","perspectives.exceptions.enabled","perspectives.check_good_certificates","perspectives.require_user_permission","perspectives.show_label","perspectives.trust_https_with_weak_consistency","perspectives.prompt_update_all_https_setting","perspectives.enable_default_list_auto_update","perspectives.use_default_notary_list"];
	var migration_needed  = HostContainerInterface.getProp("extensions.perspectives.preference_migration");

	var tmpNum=0;
	var tmpStr="";
	var tmpBool=true;

	if(migration_needed){
	    for(index = 0; index < preflist.length; ++index){
		HostContainerInterface.log("Probing "+preflist[index]);
		HostContainerInterface.setProp("extensions."+preflist[index],HostContainerInterface.getProp(preflist[index]));
	    }
	    HostContainerInterface.setProp("extensions.perspectives.preference_migration",false);
	}
    }