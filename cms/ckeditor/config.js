/**
 * @license Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {

	// Define changes to default configuration here. For example:

	// config.language            = 'fr';
	// config.uiColor             = '#363636';
	// CKEDITOR.disableAutoInline = true;

	
	config.removePlugins         = 'pastefromword';
	config.removePlugins         = 'pastefromword';
	config.forcePasteAsPlainText = true;  
	config.scayt_autoStartup     = true;
	// config.extraPlugins          = 'btbutton';
	config.allowedContent        = true;
	config.toolbar               = 'Standard';

	// Custome CSS for Links Starts here -------------------------------------------------------------------------------------
	
	config.stylesSet = [ 
	    { name: 'Link Style 1',	element: 'a', attributes: { 'class': 'btn btn--ghost-hr' } },
	    { name: 'Link Style 2',	element: 'a', attributes: { 'class': 'btn btn--ghost' } }
	];

	// Custome CSS for Links Ends here -------------------------------------------------------------------------------------

	config.toolbar_Standard = [
		['Source'],
		['PasteText','SpellChecker', 'Scayt'],
		['Undo','Redo','-','SelectAll','RemoveFormat'],
		['Link','Unlink','Anchor'],
		['Image','Table','SpecialChar'],
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Format','FontSize', 'Styles'],
		['TextColor']	
		
	];
	
	
	config.toolbar = 'Mini';

	config.toolbar_Mini = [
		['Source'],
		['PasteText', 'SpellChecker', 'Scayt'],
		['Undo','Redo','-','SelectAll','RemoveFormat'],
		['Link','Unlink'],
		['Bold','Italic'],
		['Styles']	
		
	];

    config.toolbar = 'Basic';

	config.toolbar_Basic = [
        ['Source'],
		['Undo','Redo','-','SelectAll','RemoveFormat'],
		['Bold','Italic'],
		['Styles']
	];
	
	config.toolbar = 'MyToolbar';

    config.toolbar_MyToolbar = [
		['Source'],
		['PasteText','SpellChecker', 'Scayt'],
		['Undo','Redo','-','SelectAll','RemoveFormat'],
		['Link','Unlink','Anchor'],
		['Image','Table','SpecialChar'],
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Format','FontSize','Styles'],
		['tags']
    ];


    config.toolbar = 'ToolbarInline';

    config.toolbar_ToolbarInline = [
    	['Sourcedialog'],
		['PasteText','SpellChecker', 'Scayt'],
		['Undo','Redo','-','SelectAll','RemoveFormat'],
		['Link','Unlink','Anchor'],
		['Image','Table','SpecialChar'],
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['NumberedList','BulletedList','-','Outdent','Indent','Blockquote'],
		['JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock'],
		['Format','FontSize','Styles']
    ];

    if(typeof jsVars.ckTags != 'undefined' && jsVars.ckTags.length > 0)
    {
    	var tlbLength = config.toolbar_ToolbarInline.length;

    	config.toolbar_ToolbarInline[tlbLength - 1].push('tags');

    }
    
    config.toolbar = 'sitecredits';

    config.toolbar_sitecredits = [
        ['PasteText'],
		['Undo','Redo'],
		['Link','Unlink'],
		['SpecialChar'],
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['Styles']
    ];
    
    config.toolbar = 'Emails';

    config.toolbar_Emails = [
        ['PasteText'],
		['Undo','Redo'],
		['Link','Unlink'],
		['SpecialChar'],
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['Styles']
    ];
    
    config.toolbar = 'activityeditor';

    config.toolbar_activityeditor = [
        ['PasteText'],
		['Undo','Redo'],
		['Link','Unlink'],
		['SpecialChar'],
		['Bold','Italic','Strike','-','Subscript','Superscript'],
		['Styles']
    ];
    
    config.toolbar = 'Justimages';

    config.toolbar_Justimages = [
        ['Image']
    ];
	
};
