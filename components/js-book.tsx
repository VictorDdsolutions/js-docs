'use client';
import { useState } from 'react';
import { ChevronDown, ChevronRight, FileText, Folder, ExternalLink } from 'lucide-react';

interface Section {
  id: string;
  title: string;
  items: Array<{
    name: string;
    url: string;
    indent?: boolean;
  }>;
}
const BookPipeline = () => {
const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleExpand = (id:string) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

//   const fontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"';

  const sections:Section[] = [
    {
      id: 'intro',
      title: 'Introduction',
      items: [
        { name: 'About JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#what_is_javascript' },
        { name: 'JavaScript and Java', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#javascript_and_java' },
        { name: 'ECMAScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#javascript_and_the_ecmascript_specification' },
        { name: 'Tools', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction#getting_started_with_javascript' }
      ]
    },
    {
      id: 'grammar',
      title: 'Grammar and types',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types' },
        { name: 'Basic syntax & comments', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#basics' },
        { name: 'Declarations', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#declarations' },
        { name: 'Variable scope', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope' },
        { name: 'Variable hoisting', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting' },
        { name: 'Data structures and types', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#data_structures_and_types' },
        { name: 'Literals', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals' }
      ]
    },
    {
      id: 'control',
      title: 'Control flow and error handling',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling' },
        { name: 'if...else', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#if...else_statement' },
        { name: 'switch', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#switch_statement' },
        { name: 'try/catch/throw', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#exception_handling_statements' },
        { name: 'Error objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#utilizing_error_objects' }
      ]
    },
    {
      id: 'loops',
      title: 'Loops and iteration',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration' },
        { name: 'for', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for_statement' },
        { name: 'while', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#while_statement' },
        { name: 'do...while', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#do...while_statement' },
        { name: 'continue', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#continue_statement' },
        { name: 'break', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#break_statement' },
        { name: 'for...in', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...in_statement' },
        { name: 'for...of', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#for...of_statement' }
      ]
    },
    {
      id: 'functions',
      title: 'Functions',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions' },
        { name: 'Defining functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#defining_functions' },
        { name: 'Calling functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#calling_functions' },
        { name: 'Function scopes and closures', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_scopes_and_closures' },
        { name: 'Arguments & parameters', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#function_parameters' },
        { name: 'Arrow functions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#arrow_functions' }
      ]
    },
    {
      id: 'expressions',
      title: 'Expressions and operators',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators' },
        { name: 'Assignment & Comparisons', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#assignment_operators' },
        { name: 'Arithmetic operators', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#arithmetic_operators' },
        { name: 'Bitwise & logical operators', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#logical_operators' },
        { name: 'Conditional (ternary) operator', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators#conditional_ternary_operator' }
      ]
    },
    {
      id: 'numbers',
      title: 'Numbers and strings',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings' },
        { name: 'Numbers', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#numbers' },
        { name: 'Number object', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#number_object' },
        { name: 'Math object', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#math_object' },
        { name: 'Strings', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#strings' },
        { name: 'String object', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#string_object' },
        { name: 'Template literals', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_strings#template_literals' }
      ]
    },
    {
      id: 'dates',
      title: 'Representing dates & times',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Representing_dates_times' },
        { name: 'Date object', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Representing_dates_times#date_object' }
      ]
    },
    {
      id: 'regex',
      title: 'Regular expressions',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions' },
        { name: 'Creating regular expressions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#creating_a_regular_expression' },
        { name: 'Writing a regular expression pattern', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions#writing_a_regular_expression_pattern' },
        { name: 'Assertions', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Assertions', indent: true },
        { name: 'Character classes', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes', indent: true },
        { name: 'Groups and backreferences', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences', indent: true },
        { name: 'Quantifiers', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Quantifiers', indent: true }
      ]
    },
    {
      id: 'indexed',
      title: 'Indexed collections',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections' }
      ]
    },
    {
      id: 'keyed',
      title: 'Keyed collections',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections' },
        { name: 'Map', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#map_object' },
        { name: 'WeakMap', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakmap_object' },
        { name: 'Set', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#set_object' },
        { name: 'WeakSet', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Keyed_collections#weakset_object' }
      ]
    },
    {
      id: 'objects',
      title: 'Working with objects',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects' },
        { name: 'Objects and properties', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#objects_and_properties' },
        { name: 'Creating objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#creating_new_objects' },
        { name: 'Defining methods', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_methods' },
        { name: 'Getter and setter', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects#defining_getters_and_setters' }
      ]
    },
    {
      id: 'classes',
      title: 'Using classes',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes' },
        { name: 'Declaring a class', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#declaring_a_class' },
        { name: 'Various class features', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#constructor' },
        { name: 'Extends and inheritance', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#extends_and_inheritance' },
        { name: 'Why classes?', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_classes#why_classes' }
      ]
    },
    {
      id: 'promises',
      title: 'Promises',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises' },
        { name: 'Guarantees', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#guarantees' },
        { name: 'Chaining', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#chaining' },
        { name: 'Error handling', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#error_handling' },
        { name: 'Composition', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#composition' },
        { name: 'Timing', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises#timing' }
      ]
    },
    {
      id: 'typed',
      title: 'Typed arrays',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Typed_arrays' }
      ]
    },
    {
      id: 'iterators',
      title: 'Iterators and generators',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators' },
        { name: 'Iterators', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#iterators' },
        { name: 'Iterables', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#iterables' },
        { name: 'Generators', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators#generator_functions' }
      ]
    },
    {
      id: 'resource',
      title: 'Resource management',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Resource_management' },
        { name: 'The using and await using declarations', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Resource_management#the_using_and_await_using_declarations' },
        { name: 'The DisposableStack and AsyncDisposableStack objects', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Resource_management#the_disposablestack_and_asyncdisposablestack_objects' },
        { name: 'Error handling', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Resource_management#error_handling' }
      ]
    },
    {
      id: 'i18n',
      title: 'Internationalization',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization' },
        { name: 'Date and time formatting', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization#date_and_time_formatting' },
        { name: 'Number formatting', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization#number_formatting' },
        { name: 'Collation', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Internationalization#collation' }
      ]
    },
    {
      id: 'modules',
      title: 'JavaScript modules',
      items: [
        { name: 'Overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules' },
        { name: 'Exporting', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#exporting_module_features' },
        { name: 'Importing', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#importing_features_into_your_script' },
        { name: 'Default exports', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#default_exports_versus_named_exports' },
        { name: 'Renaming features', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#renaming_imports_and_exports' },
        { name: 'Aggregating modules', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#aggregating_modules' },
        { name: 'Dynamic module loading', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#dynamic_module_loading' }
      ]
    },
    {
      id: 'advanced',
      title: 'Advanced topics',
      items: [
        { name: 'Language overview', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Language_overview' },
        { name: 'Data structures', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures' },
        { name: 'Enumerability and ownership of properties', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties' },
        { name: 'Inheritance and the prototype chain', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain' },
        { name: 'Equality comparisons and sameness', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Equality_comparisons_and_sameness' },
        { name: 'Closures', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Closures' },
        { name: 'Meta programming', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming' },
        { name: 'Memory management', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Memory_management' }
      ]
    }
  ];

  return (
    <div className="w-full h-full bg-[#262624] p-8 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
          <FileText className="w-8 h-8 text-emerald-400" />
          Javascript docs - learning pipeline (cheat sheet)
        </h1>
        
        <div className="relative">
          {/* Vertical pipeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-linear-to-b from-emerald-400 via-blue-400 to-purple-400" style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 5px, #262624 5px, #262624 10px)' }}></div>
          
          {sections.map((section) => (
            <div key={section.id} className="relative mb-6 ml-14">
              {/* Pipeline node */}
              <div className="absolute -left-14 top-3 w-5 h-5 rounded-full bg-emerald-400 border-4 border-slate-900 shadow-lg shadow-emerald-400/50"></div>
              
              {/* Connection line to card */}
              <div className="absolute -left-9 top-5 w-9 h-0.5 bg-emerald-400"></div>
              
              {/* Stage card */}
              <div className="bg-slate-800/80 backdrop-blur rounded-lg border-2 border-dashed border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div 
                  className="p-4 cursor-pointer flex items-center justify-between hover:bg-slate-700/50 rounded-lg transition-colors"
                  onClick={() => toggleExpand(section.id)}
                >
                  <div className="flex items-center gap-3">
                    <Folder className="w-5 h-5 text-emerald-400" />
                    <span className="text-lg font-semibold text-white">{section.title}</span>
                    {section.items.length > 0 && (
                      <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded-full">
                        {section.items.length} topics
                      </span>
                    )}
                  </div>
                  {section.items.length > 0 && (
                    expanded[section.id] ? 
                      <ChevronDown className="w-5 h-5 text-slate-400" /> : 
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                  )}
                </div>
                
                {/* Subtopics */}
                {expanded[section.id] && section.items.length > 0 && (
                  <div className="px-4 pb-4 space-y-2 border-t-2 border-dashed border-slate-700 mt-2 pt-4">
                    {section.items.map((item, idx) => (
                      <a
                        key={idx}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-start gap-3 p-2 rounded hover:bg-slate-700/30 transition-colors group ${item.indent ? 'ml-6' : ''}`}
                      >
                        <div className="w-2 h-2 rounded-full bg-blue-400 mt-2 group-hover:bg-blue-300 transition-colors flex-shrink-0"></div>
                        <span className="text-slate-300 text-sm group-hover:text-white transition-colors flex-1">{item.name}</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-blue-400 transition-colors flex-shrink-0 mt-1.5" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* End marker */}
          <div className="relative ml-14">
            <div className="absolute -left-14 top-0 w-5 h-5 rounded-full bg-purple-400 border-4 border-slate-900 shadow-lg shadow-purple-400/50"></div>
            <div className="absolute -left-9 top-2 w-9 h-0.5 bg-purple-400"></div>
            <div className="bg-gradient-to-r from-purple-500/20 to-emerald-500/20 backdrop-blur rounded-lg border-2 border-dashed border-purple-400/50 p-4">
              <span className="text-lg font-semibold text-white">🎉 JavaScript Mastery Complete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookPipeline;