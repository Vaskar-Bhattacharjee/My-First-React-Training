import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";

function RTE({name, control, label,
    defaultValue = ""
}) {
    
    return (
        <div className="w-full" >
            {label && <label className=" inline-block mb-1 pl-1 ">
                {label}
            </label> }
            <Controller
                name={name || "content"}
                control={control}
                render={({ field: {onChange}}) => (
                    <Editor
                    apiKey="xeoue3428ozzhsolqerf56hyn2r2rog5e5o2x5699ywrgbz5" 
                        initialValue={defaultValue}
                        className = "bg-gray-200 p-4"
                        init={{
                            height: 500,
                            
                            plugins: [
                                "advlist autolink lists link image charmap print preview anchor",
                                "searchreplace visualblocks code fullscreen",
                                "insertdatetime media table paste code help wordcount"
                            ],
                            toolbar: 'undo redo | bold italic underline strikethrough | forecolor backcolor | '
                                + 'alignleft aligncenter alignright alignjustify | '
                                + 'bullist numlist | outdent indent | link image media | '
                                + 'table emoticons charmap | pagebreak insertdatetime anchor | '
                                + 'preview fullscreen code',
                                menubar: 'file edit view insert format tools table help',
                                menu: {
                                  file: { title: 'File', items: 'newdocument preview | print' },
                                  edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
                                  view: { title: 'View', items: 'code | visualaid visualblocks fullscreen' },
                                  insert: { title: 'Insert', items: 'link media image template anchor hr toc charmap emoticons' },
                                  format: { title: 'Format', items: 'bold italic underline strikethrough | forecolor backcolor | formats | removeformat' },
                                  tools: { title: 'Tools', items: 'spellchecker code wordcount' },
                                  table: { title: 'Table', items: 'inserttable | cell row column | advtablesort' },
                                  help: { title: 'Help', items: 'help' }
                                },    
                            content_style: `body { font-family: Arial, sans-serif; }`
                        }}
                        onEditorChange={onChange}
                    />
                )}
                />
        </div>
    )
}

export default RTE
