var icGrid = function(_cobj, _container, _meta, _name) {
	
	/* Container element where this grid instance will render the actual data grid */
	this.container = _container;
	/* Parent object to which the grid is being rendered */
	this.contextObj = _cobj;
	/* Meta data of this grid */
	this.meta = _meta;	
	/* Column list from server */
	this.columns = [];
	/* Name of this grid object - used to refer */
	this.name = _name;
	/* Holds the reference object of grid's header table element */
	this.gridHeader = null;
	/* Holds the reference object of actual grid table element */
	this.gridTable = null;
	/* Holds the grid records ( the data, which is about to be rendered ) */
	this.records = null;
	/* Holds the total number of pages loaded so far ( always <= this.totalPages ) */
	this.currentPage = 1;
	/* Holds the currently visible page ( If user has scrolled to some where ) */
	this.currentVisiblePage = 1;
	/* Total number of pages count - used for Lazy Loading Mechanism */
	this.totalPages = 0;
	/* Record per page - used for Lazy Loading Mechanism */
	this.recordsPerPage = 500;
	/* Holds the current height of fully loaded single record page's height 
	 * Used for Lazy Loading Performance Boosting */
	this.recordPageHeight = 1;
	/* Starting offset index of the records ( Used in Lazy Load ) */
	this.startIndex = 0;
	/* Ending offset index of the records ( Used in Lazy Load ) */
	this.endIndex = this.recordsPerPage;
	/* Flag for whether the grid has the full records loaded */
	this.isEndReached = false;
	/* Used to track scroll direction */
	this.lastScrollPos = 0;
	/**/
	this.filters = {};
	
	this.init = function() {
		
	};
	
	/* Renders the skeleton structure for the Data Grid */
	this.renderSkeleton = function() { 
		
		var html = "",
		style = "",
		dataGrid = $( '<div class="ic-data-grid ikea-acm-data-grid-container"></div>' );		
		/* Clear the parent container */
		this.container.html( "" );		
		/* Grid header */
		this.gridHeader = $( '<div class="ic-grid-header-container"></div>' );
		/* Start of header row */
		html += '<div class="ic-data-grid-header"><div class="ic-data-grid-row">';		
		/* Prepare columns */
		for( var i = 0; i < this.meta.columns.length; i++ ) {
			style = "width: " + ( ( this.meta.columns[i].width != "" ) ? this.meta.columns[i].width +"%;" : "auto;" );
			style += "text-align: " + ( ( this.meta.columns[i].align != "" ) ? this.meta.columns[i].align : "left;" );			
			if( this.meta.columns[i].filterable ) {
				html += '<div data-column="'+ this.meta.columns[i].key +'" class="ic-data-grid-cell ic-grid-filterable" style="'+ style +'">';			
				html += '<span class="ic-grid-label">'+ this.meta.columns[i].label +'</span>';
				html += '<span class="ic-grid-header-icon"><i class="fa fa-filter"></i></span>';
			} else if( this.meta.columns[i].filterable ) {
				html += '<div data-column="'+ this.meta.columns[i].key +'" class="ic-data-grid-cell ic-grid-searchable" style="'+ style +'">';			
				html += '<span class="ic-grid-label">'+ this.meta.columns[i].label +'</span>';
				html += '<span class="ic-grid-header-icon"><i class="fa fa-search"></i></span>';
			} else {
				html += '<div data-column="'+ this.meta.columns[i].key +'" class="ic-data-grid-cell" style="'+ style +'">';			
				html += '<span class="ic-grid-label">'+ this.meta.columns[i].label +'</span>';				
			}			
			html += '</div>';			
		}		
		/* End of header row */
		html += '</div></div>';	
		
		this.gridHeader.append( $( html ) );		
		/* Start of the grid content container */
		this.gridTable = $( '<div class="ic-data-grid-content"></div>' );
		/* Just display  */
		html = '<h3 class="ic-loading-message"><i class="fa fa-cog fa-spin"></i> Loading ...</h3>';
		this.gridTable.append( html );
		
		/* Attach scroll event for lazy loading */
		this.gridTable.on( 'scroll', this, function (e) {
			e.data.onGridRecordScroll();			
	    });
		
		dataGrid.append( this.gridHeader );
		dataGrid.append( this.gridTable );
		
		this.container.append( dataGrid );
		
	};
	
};